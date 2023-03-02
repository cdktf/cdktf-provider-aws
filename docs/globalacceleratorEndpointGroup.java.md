# `globalacceleratorEndpointGroup` Submodule <a name="`globalacceleratorEndpointGroup` Submodule" id="@cdktf/provider-aws.globalacceleratorEndpointGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlobalacceleratorEndpointGroup <a name="GlobalacceleratorEndpointGroup" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group aws_globalaccelerator_endpoint_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.globalaccelerator_endpoint_group.GlobalacceleratorEndpointGroup;

GlobalacceleratorEndpointGroup.Builder.create(Construct scope, java.lang.String id)
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
    .listenerArn(java.lang.String)
//  .endpointConfiguration(IResolvable)
//  .endpointConfiguration(java.util.List<GlobalacceleratorEndpointGroupEndpointConfiguration>)
//  .endpointGroupRegion(java.lang.String)
//  .healthCheckIntervalSeconds(java.lang.Number)
//  .healthCheckPath(java.lang.String)
//  .healthCheckPort(java.lang.Number)
//  .healthCheckProtocol(java.lang.String)
//  .id(java.lang.String)
//  .portOverride(IResolvable)
//  .portOverride(java.util.List<GlobalacceleratorEndpointGroupPortOverride>)
//  .thresholdCount(java.lang.Number)
//  .timeouts(GlobalacceleratorEndpointGroupTimeouts)
//  .trafficDialPercentage(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.listenerArn">listenerArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#listener_arn GlobalacceleratorEndpointGroup#listener_arn}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.endpointConfiguration">endpointConfiguration</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfiguration">GlobalacceleratorEndpointGroupEndpointConfiguration</a>></code> | endpoint_configuration block. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.endpointGroupRegion">endpointGroupRegion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#endpoint_group_region GlobalacceleratorEndpointGroup#endpoint_group_region}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.healthCheckIntervalSeconds">healthCheckIntervalSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#health_check_interval_seconds GlobalacceleratorEndpointGroup#health_check_interval_seconds}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.healthCheckPath">healthCheckPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#health_check_path GlobalacceleratorEndpointGroup#health_check_path}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.healthCheckPort">healthCheckPort</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#health_check_port GlobalacceleratorEndpointGroup#health_check_port}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.healthCheckProtocol">healthCheckProtocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#health_check_protocol GlobalacceleratorEndpointGroup#health_check_protocol}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#id GlobalacceleratorEndpointGroup#id}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.portOverride">portOverride</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverride">GlobalacceleratorEndpointGroupPortOverride</a>></code> | port_override block. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.thresholdCount">thresholdCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#threshold_count GlobalacceleratorEndpointGroup#threshold_count}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeouts">GlobalacceleratorEndpointGroupTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.trafficDialPercentage">trafficDialPercentage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#traffic_dial_percentage GlobalacceleratorEndpointGroup#traffic_dial_percentage}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `listenerArn`<sup>Required</sup> <a name="listenerArn" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.listenerArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#listener_arn GlobalacceleratorEndpointGroup#listener_arn}.

---

##### `endpointConfiguration`<sup>Optional</sup> <a name="endpointConfiguration" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.endpointConfiguration"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfiguration">GlobalacceleratorEndpointGroupEndpointConfiguration</a>>

endpoint_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#endpoint_configuration GlobalacceleratorEndpointGroup#endpoint_configuration}

---

##### `endpointGroupRegion`<sup>Optional</sup> <a name="endpointGroupRegion" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.endpointGroupRegion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#endpoint_group_region GlobalacceleratorEndpointGroup#endpoint_group_region}.

---

##### `healthCheckIntervalSeconds`<sup>Optional</sup> <a name="healthCheckIntervalSeconds" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.healthCheckIntervalSeconds"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#health_check_interval_seconds GlobalacceleratorEndpointGroup#health_check_interval_seconds}.

---

##### `healthCheckPath`<sup>Optional</sup> <a name="healthCheckPath" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.healthCheckPath"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#health_check_path GlobalacceleratorEndpointGroup#health_check_path}.

---

##### `healthCheckPort`<sup>Optional</sup> <a name="healthCheckPort" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.healthCheckPort"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#health_check_port GlobalacceleratorEndpointGroup#health_check_port}.

---

##### `healthCheckProtocol`<sup>Optional</sup> <a name="healthCheckProtocol" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.healthCheckProtocol"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#health_check_protocol GlobalacceleratorEndpointGroup#health_check_protocol}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#id GlobalacceleratorEndpointGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `portOverride`<sup>Optional</sup> <a name="portOverride" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.portOverride"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverride">GlobalacceleratorEndpointGroupPortOverride</a>>

port_override block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#port_override GlobalacceleratorEndpointGroup#port_override}

---

##### `thresholdCount`<sup>Optional</sup> <a name="thresholdCount" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.thresholdCount"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#threshold_count GlobalacceleratorEndpointGroup#threshold_count}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeouts">GlobalacceleratorEndpointGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#timeouts GlobalacceleratorEndpointGroup#timeouts}

---

##### `trafficDialPercentage`<sup>Optional</sup> <a name="trafficDialPercentage" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.trafficDialPercentage"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#traffic_dial_percentage GlobalacceleratorEndpointGroup#traffic_dial_percentage}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.putEndpointConfiguration">putEndpointConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.putPortOverride">putPortOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetEndpointConfiguration">resetEndpointConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetEndpointGroupRegion">resetEndpointGroupRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetHealthCheckIntervalSeconds">resetHealthCheckIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetHealthCheckPath">resetHealthCheckPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetHealthCheckPort">resetHealthCheckPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetHealthCheckProtocol">resetHealthCheckProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetPortOverride">resetPortOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetThresholdCount">resetThresholdCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetTrafficDialPercentage">resetTrafficDialPercentage</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putEndpointConfiguration` <a name="putEndpointConfiguration" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.putEndpointConfiguration"></a>

```java
public void putEndpointConfiguration(IResolvable OR java.util.List<GlobalacceleratorEndpointGroupEndpointConfiguration> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.putEndpointConfiguration.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfiguration">GlobalacceleratorEndpointGroupEndpointConfiguration</a>>

---

##### `putPortOverride` <a name="putPortOverride" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.putPortOverride"></a>

```java
public void putPortOverride(IResolvable OR java.util.List<GlobalacceleratorEndpointGroupPortOverride> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.putPortOverride.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverride">GlobalacceleratorEndpointGroupPortOverride</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.putTimeouts"></a>

```java
public void putTimeouts(GlobalacceleratorEndpointGroupTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeouts">GlobalacceleratorEndpointGroupTimeouts</a>

---

##### `resetEndpointConfiguration` <a name="resetEndpointConfiguration" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetEndpointConfiguration"></a>

```java
public void resetEndpointConfiguration()
```

##### `resetEndpointGroupRegion` <a name="resetEndpointGroupRegion" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetEndpointGroupRegion"></a>

```java
public void resetEndpointGroupRegion()
```

##### `resetHealthCheckIntervalSeconds` <a name="resetHealthCheckIntervalSeconds" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetHealthCheckIntervalSeconds"></a>

```java
public void resetHealthCheckIntervalSeconds()
```

##### `resetHealthCheckPath` <a name="resetHealthCheckPath" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetHealthCheckPath"></a>

```java
public void resetHealthCheckPath()
```

##### `resetHealthCheckPort` <a name="resetHealthCheckPort" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetHealthCheckPort"></a>

```java
public void resetHealthCheckPort()
```

##### `resetHealthCheckProtocol` <a name="resetHealthCheckProtocol" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetHealthCheckProtocol"></a>

```java
public void resetHealthCheckProtocol()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetId"></a>

```java
public void resetId()
```

##### `resetPortOverride` <a name="resetPortOverride" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetPortOverride"></a>

```java
public void resetPortOverride()
```

##### `resetThresholdCount` <a name="resetThresholdCount" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetThresholdCount"></a>

```java
public void resetThresholdCount()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTrafficDialPercentage` <a name="resetTrafficDialPercentage" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetTrafficDialPercentage"></a>

```java
public void resetTrafficDialPercentage()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.globalaccelerator_endpoint_group.GlobalacceleratorEndpointGroup;

GlobalacceleratorEndpointGroup.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.globalaccelerator_endpoint_group.GlobalacceleratorEndpointGroup;

GlobalacceleratorEndpointGroup.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.globalaccelerator_endpoint_group.GlobalacceleratorEndpointGroup;

GlobalacceleratorEndpointGroup.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.endpointConfiguration">endpointConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationList">GlobalacceleratorEndpointGroupEndpointConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.portOverride">portOverride</a></code> | <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideList">GlobalacceleratorEndpointGroupPortOverrideList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference">GlobalacceleratorEndpointGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.endpointConfigurationInput">endpointConfigurationInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfiguration">GlobalacceleratorEndpointGroupEndpointConfiguration</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.endpointGroupRegionInput">endpointGroupRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.healthCheckIntervalSecondsInput">healthCheckIntervalSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.healthCheckPathInput">healthCheckPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.healthCheckPortInput">healthCheckPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.healthCheckProtocolInput">healthCheckProtocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.listenerArnInput">listenerArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.portOverrideInput">portOverrideInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverride">GlobalacceleratorEndpointGroupPortOverride</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.thresholdCountInput">thresholdCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeouts">GlobalacceleratorEndpointGroupTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.trafficDialPercentageInput">trafficDialPercentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.endpointGroupRegion">endpointGroupRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.healthCheckIntervalSeconds">healthCheckIntervalSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.healthCheckPath">healthCheckPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.healthCheckPort">healthCheckPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.healthCheckProtocol">healthCheckProtocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.listenerArn">listenerArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.thresholdCount">thresholdCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.trafficDialPercentage">trafficDialPercentage</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `endpointConfiguration`<sup>Required</sup> <a name="endpointConfiguration" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.endpointConfiguration"></a>

```java
public GlobalacceleratorEndpointGroupEndpointConfigurationList getEndpointConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationList">GlobalacceleratorEndpointGroupEndpointConfigurationList</a>

---

##### `portOverride`<sup>Required</sup> <a name="portOverride" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.portOverride"></a>

```java
public GlobalacceleratorEndpointGroupPortOverrideList getPortOverride();
```

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideList">GlobalacceleratorEndpointGroupPortOverrideList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.timeouts"></a>

```java
public GlobalacceleratorEndpointGroupTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference">GlobalacceleratorEndpointGroupTimeoutsOutputReference</a>

---

##### `endpointConfigurationInput`<sup>Optional</sup> <a name="endpointConfigurationInput" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.endpointConfigurationInput"></a>

```java
public java.lang.Object getEndpointConfigurationInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfiguration">GlobalacceleratorEndpointGroupEndpointConfiguration</a>>

---

##### `endpointGroupRegionInput`<sup>Optional</sup> <a name="endpointGroupRegionInput" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.endpointGroupRegionInput"></a>

```java
public java.lang.String getEndpointGroupRegionInput();
```

- *Type:* java.lang.String

---

##### `healthCheckIntervalSecondsInput`<sup>Optional</sup> <a name="healthCheckIntervalSecondsInput" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.healthCheckIntervalSecondsInput"></a>

```java
public java.lang.Number getHealthCheckIntervalSecondsInput();
```

- *Type:* java.lang.Number

---

##### `healthCheckPathInput`<sup>Optional</sup> <a name="healthCheckPathInput" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.healthCheckPathInput"></a>

```java
public java.lang.String getHealthCheckPathInput();
```

- *Type:* java.lang.String

---

##### `healthCheckPortInput`<sup>Optional</sup> <a name="healthCheckPortInput" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.healthCheckPortInput"></a>

```java
public java.lang.Number getHealthCheckPortInput();
```

- *Type:* java.lang.Number

---

##### `healthCheckProtocolInput`<sup>Optional</sup> <a name="healthCheckProtocolInput" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.healthCheckProtocolInput"></a>

```java
public java.lang.String getHealthCheckProtocolInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `listenerArnInput`<sup>Optional</sup> <a name="listenerArnInput" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.listenerArnInput"></a>

```java
public java.lang.String getListenerArnInput();
```

- *Type:* java.lang.String

---

##### `portOverrideInput`<sup>Optional</sup> <a name="portOverrideInput" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.portOverrideInput"></a>

```java
public java.lang.Object getPortOverrideInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverride">GlobalacceleratorEndpointGroupPortOverride</a>>

---

##### `thresholdCountInput`<sup>Optional</sup> <a name="thresholdCountInput" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.thresholdCountInput"></a>

```java
public java.lang.Number getThresholdCountInput();
```

- *Type:* java.lang.Number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeouts">GlobalacceleratorEndpointGroupTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `trafficDialPercentageInput`<sup>Optional</sup> <a name="trafficDialPercentageInput" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.trafficDialPercentageInput"></a>

```java
public java.lang.Number getTrafficDialPercentageInput();
```

- *Type:* java.lang.Number

---

##### `endpointGroupRegion`<sup>Required</sup> <a name="endpointGroupRegion" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.endpointGroupRegion"></a>

```java
public java.lang.String getEndpointGroupRegion();
```

- *Type:* java.lang.String

---

##### `healthCheckIntervalSeconds`<sup>Required</sup> <a name="healthCheckIntervalSeconds" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.healthCheckIntervalSeconds"></a>

```java
public java.lang.Number getHealthCheckIntervalSeconds();
```

- *Type:* java.lang.Number

---

##### `healthCheckPath`<sup>Required</sup> <a name="healthCheckPath" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.healthCheckPath"></a>

```java
public java.lang.String getHealthCheckPath();
```

- *Type:* java.lang.String

---

##### `healthCheckPort`<sup>Required</sup> <a name="healthCheckPort" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.healthCheckPort"></a>

```java
public java.lang.Number getHealthCheckPort();
```

- *Type:* java.lang.Number

---

##### `healthCheckProtocol`<sup>Required</sup> <a name="healthCheckProtocol" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.healthCheckProtocol"></a>

```java
public java.lang.String getHealthCheckProtocol();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `listenerArn`<sup>Required</sup> <a name="listenerArn" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.listenerArn"></a>

```java
public java.lang.String getListenerArn();
```

- *Type:* java.lang.String

---

##### `thresholdCount`<sup>Required</sup> <a name="thresholdCount" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.thresholdCount"></a>

```java
public java.lang.Number getThresholdCount();
```

- *Type:* java.lang.Number

---

##### `trafficDialPercentage`<sup>Required</sup> <a name="trafficDialPercentage" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.trafficDialPercentage"></a>

```java
public java.lang.Number getTrafficDialPercentage();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GlobalacceleratorEndpointGroupConfig <a name="GlobalacceleratorEndpointGroupConfig" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.globalaccelerator_endpoint_group.GlobalacceleratorEndpointGroupConfig;

GlobalacceleratorEndpointGroupConfig.builder()
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
    .listenerArn(java.lang.String)
//  .endpointConfiguration(IResolvable)
//  .endpointConfiguration(java.util.List<GlobalacceleratorEndpointGroupEndpointConfiguration>)
//  .endpointGroupRegion(java.lang.String)
//  .healthCheckIntervalSeconds(java.lang.Number)
//  .healthCheckPath(java.lang.String)
//  .healthCheckPort(java.lang.Number)
//  .healthCheckProtocol(java.lang.String)
//  .id(java.lang.String)
//  .portOverride(IResolvable)
//  .portOverride(java.util.List<GlobalacceleratorEndpointGroupPortOverride>)
//  .thresholdCount(java.lang.Number)
//  .timeouts(GlobalacceleratorEndpointGroupTimeouts)
//  .trafficDialPercentage(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.listenerArn">listenerArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#listener_arn GlobalacceleratorEndpointGroup#listener_arn}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.endpointConfiguration">endpointConfiguration</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfiguration">GlobalacceleratorEndpointGroupEndpointConfiguration</a>></code> | endpoint_configuration block. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.endpointGroupRegion">endpointGroupRegion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#endpoint_group_region GlobalacceleratorEndpointGroup#endpoint_group_region}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.healthCheckIntervalSeconds">healthCheckIntervalSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#health_check_interval_seconds GlobalacceleratorEndpointGroup#health_check_interval_seconds}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.healthCheckPath">healthCheckPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#health_check_path GlobalacceleratorEndpointGroup#health_check_path}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.healthCheckPort">healthCheckPort</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#health_check_port GlobalacceleratorEndpointGroup#health_check_port}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.healthCheckProtocol">healthCheckProtocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#health_check_protocol GlobalacceleratorEndpointGroup#health_check_protocol}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#id GlobalacceleratorEndpointGroup#id}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.portOverride">portOverride</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverride">GlobalacceleratorEndpointGroupPortOverride</a>></code> | port_override block. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.thresholdCount">thresholdCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#threshold_count GlobalacceleratorEndpointGroup#threshold_count}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeouts">GlobalacceleratorEndpointGroupTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.trafficDialPercentage">trafficDialPercentage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#traffic_dial_percentage GlobalacceleratorEndpointGroup#traffic_dial_percentage}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `listenerArn`<sup>Required</sup> <a name="listenerArn" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.listenerArn"></a>

```java
public java.lang.String getListenerArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#listener_arn GlobalacceleratorEndpointGroup#listener_arn}.

---

##### `endpointConfiguration`<sup>Optional</sup> <a name="endpointConfiguration" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.endpointConfiguration"></a>

```java
public java.lang.Object getEndpointConfiguration();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfiguration">GlobalacceleratorEndpointGroupEndpointConfiguration</a>>

endpoint_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#endpoint_configuration GlobalacceleratorEndpointGroup#endpoint_configuration}

---

##### `endpointGroupRegion`<sup>Optional</sup> <a name="endpointGroupRegion" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.endpointGroupRegion"></a>

```java
public java.lang.String getEndpointGroupRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#endpoint_group_region GlobalacceleratorEndpointGroup#endpoint_group_region}.

---

##### `healthCheckIntervalSeconds`<sup>Optional</sup> <a name="healthCheckIntervalSeconds" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.healthCheckIntervalSeconds"></a>

```java
public java.lang.Number getHealthCheckIntervalSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#health_check_interval_seconds GlobalacceleratorEndpointGroup#health_check_interval_seconds}.

---

##### `healthCheckPath`<sup>Optional</sup> <a name="healthCheckPath" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.healthCheckPath"></a>

```java
public java.lang.String getHealthCheckPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#health_check_path GlobalacceleratorEndpointGroup#health_check_path}.

---

##### `healthCheckPort`<sup>Optional</sup> <a name="healthCheckPort" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.healthCheckPort"></a>

```java
public java.lang.Number getHealthCheckPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#health_check_port GlobalacceleratorEndpointGroup#health_check_port}.

---

##### `healthCheckProtocol`<sup>Optional</sup> <a name="healthCheckProtocol" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.healthCheckProtocol"></a>

```java
public java.lang.String getHealthCheckProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#health_check_protocol GlobalacceleratorEndpointGroup#health_check_protocol}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#id GlobalacceleratorEndpointGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `portOverride`<sup>Optional</sup> <a name="portOverride" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.portOverride"></a>

```java
public java.lang.Object getPortOverride();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverride">GlobalacceleratorEndpointGroupPortOverride</a>>

port_override block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#port_override GlobalacceleratorEndpointGroup#port_override}

---

##### `thresholdCount`<sup>Optional</sup> <a name="thresholdCount" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.thresholdCount"></a>

```java
public java.lang.Number getThresholdCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#threshold_count GlobalacceleratorEndpointGroup#threshold_count}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.timeouts"></a>

```java
public GlobalacceleratorEndpointGroupTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeouts">GlobalacceleratorEndpointGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#timeouts GlobalacceleratorEndpointGroup#timeouts}

---

##### `trafficDialPercentage`<sup>Optional</sup> <a name="trafficDialPercentage" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.trafficDialPercentage"></a>

```java
public java.lang.Number getTrafficDialPercentage();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#traffic_dial_percentage GlobalacceleratorEndpointGroup#traffic_dial_percentage}.

---

### GlobalacceleratorEndpointGroupEndpointConfiguration <a name="GlobalacceleratorEndpointGroupEndpointConfiguration" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.globalaccelerator_endpoint_group.GlobalacceleratorEndpointGroupEndpointConfiguration;

GlobalacceleratorEndpointGroupEndpointConfiguration.builder()
//  .clientIpPreservationEnabled(java.lang.Boolean)
//  .clientIpPreservationEnabled(IResolvable)
//  .endpointId(java.lang.String)
//  .weight(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfiguration.property.clientIpPreservationEnabled">clientIpPreservationEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#client_ip_preservation_enabled GlobalacceleratorEndpointGroup#client_ip_preservation_enabled}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfiguration.property.endpointId">endpointId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#endpoint_id GlobalacceleratorEndpointGroup#endpoint_id}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfiguration.property.weight">weight</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#weight GlobalacceleratorEndpointGroup#weight}. |

---

##### `clientIpPreservationEnabled`<sup>Optional</sup> <a name="clientIpPreservationEnabled" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfiguration.property.clientIpPreservationEnabled"></a>

```java
public java.lang.Object getClientIpPreservationEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#client_ip_preservation_enabled GlobalacceleratorEndpointGroup#client_ip_preservation_enabled}.

---

##### `endpointId`<sup>Optional</sup> <a name="endpointId" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfiguration.property.endpointId"></a>

```java
public java.lang.String getEndpointId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#endpoint_id GlobalacceleratorEndpointGroup#endpoint_id}.

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfiguration.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#weight GlobalacceleratorEndpointGroup#weight}.

---

### GlobalacceleratorEndpointGroupPortOverride <a name="GlobalacceleratorEndpointGroupPortOverride" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverride"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverride.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.globalaccelerator_endpoint_group.GlobalacceleratorEndpointGroupPortOverride;

GlobalacceleratorEndpointGroupPortOverride.builder()
    .endpointPort(java.lang.Number)
    .listenerPort(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverride.property.endpointPort">endpointPort</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#endpoint_port GlobalacceleratorEndpointGroup#endpoint_port}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverride.property.listenerPort">listenerPort</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#listener_port GlobalacceleratorEndpointGroup#listener_port}. |

---

##### `endpointPort`<sup>Required</sup> <a name="endpointPort" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverride.property.endpointPort"></a>

```java
public java.lang.Number getEndpointPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#endpoint_port GlobalacceleratorEndpointGroup#endpoint_port}.

---

##### `listenerPort`<sup>Required</sup> <a name="listenerPort" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverride.property.listenerPort"></a>

```java
public java.lang.Number getListenerPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#listener_port GlobalacceleratorEndpointGroup#listener_port}.

---

### GlobalacceleratorEndpointGroupTimeouts <a name="GlobalacceleratorEndpointGroupTimeouts" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.globalaccelerator_endpoint_group.GlobalacceleratorEndpointGroupTimeouts;

GlobalacceleratorEndpointGroupTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#create GlobalacceleratorEndpointGroup#create}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#delete GlobalacceleratorEndpointGroup#delete}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#update GlobalacceleratorEndpointGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#create GlobalacceleratorEndpointGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#delete GlobalacceleratorEndpointGroup#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#update GlobalacceleratorEndpointGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GlobalacceleratorEndpointGroupEndpointConfigurationList <a name="GlobalacceleratorEndpointGroupEndpointConfigurationList" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.globalaccelerator_endpoint_group.GlobalacceleratorEndpointGroupEndpointConfigurationList;

new GlobalacceleratorEndpointGroupEndpointConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationList.get"></a>

```java
public GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfiguration">GlobalacceleratorEndpointGroupEndpointConfiguration</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfiguration">GlobalacceleratorEndpointGroupEndpointConfiguration</a>>

---


### GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference <a name="GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.globalaccelerator_endpoint_group.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference;

new GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.resetClientIpPreservationEnabled">resetClientIpPreservationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.resetEndpointId">resetEndpointId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.resetWeight">resetWeight</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClientIpPreservationEnabled` <a name="resetClientIpPreservationEnabled" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.resetClientIpPreservationEnabled"></a>

```java
public void resetClientIpPreservationEnabled()
```

##### `resetEndpointId` <a name="resetEndpointId" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.resetEndpointId"></a>

```java
public void resetEndpointId()
```

##### `resetWeight` <a name="resetWeight" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.resetWeight"></a>

```java
public void resetWeight()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.property.clientIpPreservationEnabledInput">clientIpPreservationEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.property.endpointIdInput">endpointIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.property.weightInput">weightInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.property.clientIpPreservationEnabled">clientIpPreservationEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.property.endpointId">endpointId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.property.weight">weight</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfiguration">GlobalacceleratorEndpointGroupEndpointConfiguration</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clientIpPreservationEnabledInput`<sup>Optional</sup> <a name="clientIpPreservationEnabledInput" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.property.clientIpPreservationEnabledInput"></a>

```java
public java.lang.Object getClientIpPreservationEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `endpointIdInput`<sup>Optional</sup> <a name="endpointIdInput" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.property.endpointIdInput"></a>

```java
public java.lang.String getEndpointIdInput();
```

- *Type:* java.lang.String

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.property.weightInput"></a>

```java
public java.lang.Number getWeightInput();
```

- *Type:* java.lang.Number

---

##### `clientIpPreservationEnabled`<sup>Required</sup> <a name="clientIpPreservationEnabled" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.property.clientIpPreservationEnabled"></a>

```java
public java.lang.Object getClientIpPreservationEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `endpointId`<sup>Required</sup> <a name="endpointId" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.property.endpointId"></a>

```java
public java.lang.String getEndpointId();
```

- *Type:* java.lang.String

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfiguration">GlobalacceleratorEndpointGroupEndpointConfiguration</a> OR com.hashicorp.cdktf.IResolvable

---


### GlobalacceleratorEndpointGroupPortOverrideList <a name="GlobalacceleratorEndpointGroupPortOverrideList" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.globalaccelerator_endpoint_group.GlobalacceleratorEndpointGroupPortOverrideList;

new GlobalacceleratorEndpointGroupPortOverrideList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideList.get"></a>

```java
public GlobalacceleratorEndpointGroupPortOverrideOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverride">GlobalacceleratorEndpointGroupPortOverride</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverride">GlobalacceleratorEndpointGroupPortOverride</a>>

---


### GlobalacceleratorEndpointGroupPortOverrideOutputReference <a name="GlobalacceleratorEndpointGroupPortOverrideOutputReference" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.globalaccelerator_endpoint_group.GlobalacceleratorEndpointGroupPortOverrideOutputReference;

new GlobalacceleratorEndpointGroupPortOverrideOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.property.endpointPortInput">endpointPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.property.listenerPortInput">listenerPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.property.endpointPort">endpointPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.property.listenerPort">listenerPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverride">GlobalacceleratorEndpointGroupPortOverride</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endpointPortInput`<sup>Optional</sup> <a name="endpointPortInput" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.property.endpointPortInput"></a>

```java
public java.lang.Number getEndpointPortInput();
```

- *Type:* java.lang.Number

---

##### `listenerPortInput`<sup>Optional</sup> <a name="listenerPortInput" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.property.listenerPortInput"></a>

```java
public java.lang.Number getListenerPortInput();
```

- *Type:* java.lang.Number

---

##### `endpointPort`<sup>Required</sup> <a name="endpointPort" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.property.endpointPort"></a>

```java
public java.lang.Number getEndpointPort();
```

- *Type:* java.lang.Number

---

##### `listenerPort`<sup>Required</sup> <a name="listenerPort" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.property.listenerPort"></a>

```java
public java.lang.Number getListenerPort();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverride">GlobalacceleratorEndpointGroupPortOverride</a> OR com.hashicorp.cdktf.IResolvable

---


### GlobalacceleratorEndpointGroupTimeoutsOutputReference <a name="GlobalacceleratorEndpointGroupTimeoutsOutputReference" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.globalaccelerator_endpoint_group.GlobalacceleratorEndpointGroupTimeoutsOutputReference;

new GlobalacceleratorEndpointGroupTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeouts">GlobalacceleratorEndpointGroupTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeouts">GlobalacceleratorEndpointGroupTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



