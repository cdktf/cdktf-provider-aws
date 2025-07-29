# `prometheusQueryLoggingConfiguration` Submodule <a name="`prometheusQueryLoggingConfiguration` Submodule" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PrometheusQueryLoggingConfiguration <a name="PrometheusQueryLoggingConfiguration" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/prometheus_query_logging_configuration aws_prometheus_query_logging_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.prometheus_query_logging_configuration.PrometheusQueryLoggingConfiguration;

PrometheusQueryLoggingConfiguration.Builder.create(Construct scope, java.lang.String id)
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
    .workspaceId(java.lang.String)
//  .destination(IResolvable)
//  .destination(java.util.List<PrometheusQueryLoggingConfigurationDestination>)
//  .region(java.lang.String)
//  .timeouts(PrometheusQueryLoggingConfigurationTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.Initializer.parameter.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/prometheus_query_logging_configuration#workspace_id PrometheusQueryLoggingConfiguration#workspace_id}. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.Initializer.parameter.destination">destination</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestination">PrometheusQueryLoggingConfigurationDestination</a>></code> | destination block. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeouts">PrometheusQueryLoggingConfigurationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.Initializer.parameter.workspaceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/prometheus_query_logging_configuration#workspace_id PrometheusQueryLoggingConfiguration#workspace_id}.

---

##### `destination`<sup>Optional</sup> <a name="destination" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.Initializer.parameter.destination"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestination">PrometheusQueryLoggingConfigurationDestination</a>>

destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/prometheus_query_logging_configuration#destination PrometheusQueryLoggingConfiguration#destination}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/prometheus_query_logging_configuration#region PrometheusQueryLoggingConfiguration#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeouts">PrometheusQueryLoggingConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/prometheus_query_logging_configuration#timeouts PrometheusQueryLoggingConfiguration#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.putDestination">putDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.resetDestination">resetDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDestination` <a name="putDestination" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.putDestination"></a>

```java
public void putDestination(IResolvable OR java.util.List<PrometheusQueryLoggingConfigurationDestination> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.putDestination.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestination">PrometheusQueryLoggingConfigurationDestination</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.putTimeouts"></a>

```java
public void putTimeouts(PrometheusQueryLoggingConfigurationTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeouts">PrometheusQueryLoggingConfigurationTimeouts</a>

---

##### `resetDestination` <a name="resetDestination" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.resetDestination"></a>

```java
public void resetDestination()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PrometheusQueryLoggingConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.prometheus_query_logging_configuration.PrometheusQueryLoggingConfiguration;

PrometheusQueryLoggingConfiguration.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.prometheus_query_logging_configuration.PrometheusQueryLoggingConfiguration;

PrometheusQueryLoggingConfiguration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.prometheus_query_logging_configuration.PrometheusQueryLoggingConfiguration;

PrometheusQueryLoggingConfiguration.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.prometheus_query_logging_configuration.PrometheusQueryLoggingConfiguration;

PrometheusQueryLoggingConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),PrometheusQueryLoggingConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a PrometheusQueryLoggingConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the PrometheusQueryLoggingConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing PrometheusQueryLoggingConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/prometheus_query_logging_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the PrometheusQueryLoggingConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.destination">destination</a></code> | <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationList">PrometheusQueryLoggingConfigurationDestinationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference">PrometheusQueryLoggingConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.destinationInput">destinationInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestination">PrometheusQueryLoggingConfigurationDestination</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeouts">PrometheusQueryLoggingConfigurationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.workspaceIdInput">workspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.destination"></a>

```java
public PrometheusQueryLoggingConfigurationDestinationList getDestination();
```

- *Type:* <a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationList">PrometheusQueryLoggingConfigurationDestinationList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.timeouts"></a>

```java
public PrometheusQueryLoggingConfigurationTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference">PrometheusQueryLoggingConfigurationTimeoutsOutputReference</a>

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.destinationInput"></a>

```java
public java.lang.Object getDestinationInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestination">PrometheusQueryLoggingConfigurationDestination</a>>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeouts">PrometheusQueryLoggingConfigurationTimeouts</a>

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.workspaceIdInput"></a>

```java
public java.lang.String getWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PrometheusQueryLoggingConfigurationConfig <a name="PrometheusQueryLoggingConfigurationConfig" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.prometheus_query_logging_configuration.PrometheusQueryLoggingConfigurationConfig;

PrometheusQueryLoggingConfigurationConfig.builder()
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
    .workspaceId(java.lang.String)
//  .destination(IResolvable)
//  .destination(java.util.List<PrometheusQueryLoggingConfigurationDestination>)
//  .region(java.lang.String)
//  .timeouts(PrometheusQueryLoggingConfigurationTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationConfig.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/prometheus_query_logging_configuration#workspace_id PrometheusQueryLoggingConfiguration#workspace_id}. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationConfig.property.destination">destination</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestination">PrometheusQueryLoggingConfigurationDestination</a>></code> | destination block. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeouts">PrometheusQueryLoggingConfigurationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationConfig.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/prometheus_query_logging_configuration#workspace_id PrometheusQueryLoggingConfiguration#workspace_id}.

---

##### `destination`<sup>Optional</sup> <a name="destination" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationConfig.property.destination"></a>

```java
public java.lang.Object getDestination();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestination">PrometheusQueryLoggingConfigurationDestination</a>>

destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/prometheus_query_logging_configuration#destination PrometheusQueryLoggingConfiguration#destination}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/prometheus_query_logging_configuration#region PrometheusQueryLoggingConfiguration#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationConfig.property.timeouts"></a>

```java
public PrometheusQueryLoggingConfigurationTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeouts">PrometheusQueryLoggingConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/prometheus_query_logging_configuration#timeouts PrometheusQueryLoggingConfiguration#timeouts}

---

### PrometheusQueryLoggingConfigurationDestination <a name="PrometheusQueryLoggingConfigurationDestination" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestination.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.prometheus_query_logging_configuration.PrometheusQueryLoggingConfigurationDestination;

PrometheusQueryLoggingConfigurationDestination.builder()
//  .cloudwatchLogs(IResolvable)
//  .cloudwatchLogs(java.util.List<PrometheusQueryLoggingConfigurationDestinationCloudwatchLogs>)
//  .filters(IResolvable)
//  .filters(java.util.List<PrometheusQueryLoggingConfigurationDestinationFilters>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestination.property.cloudwatchLogs">cloudwatchLogs</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogs">PrometheusQueryLoggingConfigurationDestinationCloudwatchLogs</a>></code> | cloudwatch_logs block. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestination.property.filters">filters</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFilters">PrometheusQueryLoggingConfigurationDestinationFilters</a>></code> | filters block. |

---

##### `cloudwatchLogs`<sup>Optional</sup> <a name="cloudwatchLogs" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestination.property.cloudwatchLogs"></a>

```java
public java.lang.Object getCloudwatchLogs();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogs">PrometheusQueryLoggingConfigurationDestinationCloudwatchLogs</a>>

cloudwatch_logs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/prometheus_query_logging_configuration#cloudwatch_logs PrometheusQueryLoggingConfiguration#cloudwatch_logs}

---

##### `filters`<sup>Optional</sup> <a name="filters" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestination.property.filters"></a>

```java
public java.lang.Object getFilters();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFilters">PrometheusQueryLoggingConfigurationDestinationFilters</a>>

filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/prometheus_query_logging_configuration#filters PrometheusQueryLoggingConfiguration#filters}

---

### PrometheusQueryLoggingConfigurationDestinationCloudwatchLogs <a name="PrometheusQueryLoggingConfigurationDestinationCloudwatchLogs" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.prometheus_query_logging_configuration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogs;

PrometheusQueryLoggingConfigurationDestinationCloudwatchLogs.builder()
    .logGroupArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogs.property.logGroupArn">logGroupArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/prometheus_query_logging_configuration#log_group_arn PrometheusQueryLoggingConfiguration#log_group_arn}. |

---

##### `logGroupArn`<sup>Required</sup> <a name="logGroupArn" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogs.property.logGroupArn"></a>

```java
public java.lang.String getLogGroupArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/prometheus_query_logging_configuration#log_group_arn PrometheusQueryLoggingConfiguration#log_group_arn}.

---

### PrometheusQueryLoggingConfigurationDestinationFilters <a name="PrometheusQueryLoggingConfigurationDestinationFilters" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFilters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFilters.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.prometheus_query_logging_configuration.PrometheusQueryLoggingConfigurationDestinationFilters;

PrometheusQueryLoggingConfigurationDestinationFilters.builder()
    .qspThreshold(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFilters.property.qspThreshold">qspThreshold</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/prometheus_query_logging_configuration#qsp_threshold PrometheusQueryLoggingConfiguration#qsp_threshold}. |

---

##### `qspThreshold`<sup>Required</sup> <a name="qspThreshold" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFilters.property.qspThreshold"></a>

```java
public java.lang.Number getQspThreshold();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/prometheus_query_logging_configuration#qsp_threshold PrometheusQueryLoggingConfiguration#qsp_threshold}.

---

### PrometheusQueryLoggingConfigurationTimeouts <a name="PrometheusQueryLoggingConfigurationTimeouts" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.prometheus_query_logging_configuration.PrometheusQueryLoggingConfigurationTimeouts;

PrometheusQueryLoggingConfigurationTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/prometheus_query_logging_configuration#create PrometheusQueryLoggingConfiguration#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/prometheus_query_logging_configuration#delete PrometheusQueryLoggingConfiguration#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/prometheus_query_logging_configuration#update PrometheusQueryLoggingConfiguration#update}

---

## Classes <a name="Classes" id="Classes"></a>

### PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsList <a name="PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsList" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.prometheus_query_logging_configuration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsList;

new PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsList.get"></a>

```java
public PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogs">PrometheusQueryLoggingConfigurationDestinationCloudwatchLogs</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogs">PrometheusQueryLoggingConfigurationDestinationCloudwatchLogs</a>>

---


### PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference <a name="PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.prometheus_query_logging_configuration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference;

new PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.property.logGroupArnInput">logGroupArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.property.logGroupArn">logGroupArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogs">PrometheusQueryLoggingConfigurationDestinationCloudwatchLogs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `logGroupArnInput`<sup>Optional</sup> <a name="logGroupArnInput" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.property.logGroupArnInput"></a>

```java
public java.lang.String getLogGroupArnInput();
```

- *Type:* java.lang.String

---

##### `logGroupArn`<sup>Required</sup> <a name="logGroupArn" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.property.logGroupArn"></a>

```java
public java.lang.String getLogGroupArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogs">PrometheusQueryLoggingConfigurationDestinationCloudwatchLogs</a>

---


### PrometheusQueryLoggingConfigurationDestinationFiltersList <a name="PrometheusQueryLoggingConfigurationDestinationFiltersList" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.prometheus_query_logging_configuration.PrometheusQueryLoggingConfigurationDestinationFiltersList;

new PrometheusQueryLoggingConfigurationDestinationFiltersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersList.get"></a>

```java
public PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFilters">PrometheusQueryLoggingConfigurationDestinationFilters</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFilters">PrometheusQueryLoggingConfigurationDestinationFilters</a>>

---


### PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference <a name="PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.prometheus_query_logging_configuration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference;

new PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.property.qspThresholdInput">qspThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.property.qspThreshold">qspThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFilters">PrometheusQueryLoggingConfigurationDestinationFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `qspThresholdInput`<sup>Optional</sup> <a name="qspThresholdInput" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.property.qspThresholdInput"></a>

```java
public java.lang.Number getQspThresholdInput();
```

- *Type:* java.lang.Number

---

##### `qspThreshold`<sup>Required</sup> <a name="qspThreshold" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.property.qspThreshold"></a>

```java
public java.lang.Number getQspThreshold();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFilters">PrometheusQueryLoggingConfigurationDestinationFilters</a>

---


### PrometheusQueryLoggingConfigurationDestinationList <a name="PrometheusQueryLoggingConfigurationDestinationList" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.prometheus_query_logging_configuration.PrometheusQueryLoggingConfigurationDestinationList;

new PrometheusQueryLoggingConfigurationDestinationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationList.get"></a>

```java
public PrometheusQueryLoggingConfigurationDestinationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestination">PrometheusQueryLoggingConfigurationDestination</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestination">PrometheusQueryLoggingConfigurationDestination</a>>

---


### PrometheusQueryLoggingConfigurationDestinationOutputReference <a name="PrometheusQueryLoggingConfigurationDestinationOutputReference" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.prometheus_query_logging_configuration.PrometheusQueryLoggingConfigurationDestinationOutputReference;

new PrometheusQueryLoggingConfigurationDestinationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.putCloudwatchLogs">putCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.putFilters">putFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.resetCloudwatchLogs">resetCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.resetFilters">resetFilters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCloudwatchLogs` <a name="putCloudwatchLogs" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.putCloudwatchLogs"></a>

```java
public void putCloudwatchLogs(IResolvable OR java.util.List<PrometheusQueryLoggingConfigurationDestinationCloudwatchLogs> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.putCloudwatchLogs.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogs">PrometheusQueryLoggingConfigurationDestinationCloudwatchLogs</a>>

---

##### `putFilters` <a name="putFilters" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.putFilters"></a>

```java
public void putFilters(IResolvable OR java.util.List<PrometheusQueryLoggingConfigurationDestinationFilters> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.putFilters.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFilters">PrometheusQueryLoggingConfigurationDestinationFilters</a>>

---

##### `resetCloudwatchLogs` <a name="resetCloudwatchLogs" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.resetCloudwatchLogs"></a>

```java
public void resetCloudwatchLogs()
```

##### `resetFilters` <a name="resetFilters" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.resetFilters"></a>

```java
public void resetFilters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.property.cloudwatchLogs">cloudwatchLogs</a></code> | <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsList">PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.property.filters">filters</a></code> | <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersList">PrometheusQueryLoggingConfigurationDestinationFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.property.cloudwatchLogsInput">cloudwatchLogsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogs">PrometheusQueryLoggingConfigurationDestinationCloudwatchLogs</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.property.filtersInput">filtersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFilters">PrometheusQueryLoggingConfigurationDestinationFilters</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestination">PrometheusQueryLoggingConfigurationDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cloudwatchLogs`<sup>Required</sup> <a name="cloudwatchLogs" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.property.cloudwatchLogs"></a>

```java
public PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsList getCloudwatchLogs();
```

- *Type:* <a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsList">PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsList</a>

---

##### `filters`<sup>Required</sup> <a name="filters" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.property.filters"></a>

```java
public PrometheusQueryLoggingConfigurationDestinationFiltersList getFilters();
```

- *Type:* <a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersList">PrometheusQueryLoggingConfigurationDestinationFiltersList</a>

---

##### `cloudwatchLogsInput`<sup>Optional</sup> <a name="cloudwatchLogsInput" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.property.cloudwatchLogsInput"></a>

```java
public java.lang.Object getCloudwatchLogsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogs">PrometheusQueryLoggingConfigurationDestinationCloudwatchLogs</a>>

---

##### `filtersInput`<sup>Optional</sup> <a name="filtersInput" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.property.filtersInput"></a>

```java
public java.lang.Object getFiltersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFilters">PrometheusQueryLoggingConfigurationDestinationFilters</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestination">PrometheusQueryLoggingConfigurationDestination</a>

---


### PrometheusQueryLoggingConfigurationTimeoutsOutputReference <a name="PrometheusQueryLoggingConfigurationTimeoutsOutputReference" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.prometheus_query_logging_configuration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference;

new PrometheusQueryLoggingConfigurationTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeouts">PrometheusQueryLoggingConfigurationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeouts">PrometheusQueryLoggingConfigurationTimeouts</a>

---



