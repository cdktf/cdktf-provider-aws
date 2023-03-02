# `ec2TrafficMirrorSession` Submodule <a name="`ec2TrafficMirrorSession` Submodule" id="@cdktf/provider-aws.ec2TrafficMirrorSession"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2TrafficMirrorSession <a name="Ec2TrafficMirrorSession" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session aws_ec2_traffic_mirror_session}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_traffic_mirror_session.Ec2TrafficMirrorSession;

Ec2TrafficMirrorSession.Builder.create(Construct scope, java.lang.String id)
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
    .networkInterfaceId(java.lang.String)
    .sessionNumber(java.lang.Number)
    .trafficMirrorFilterId(java.lang.String)
    .trafficMirrorTargetId(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .packetLength(java.lang.Number)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .virtualNetworkId(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.Initializer.parameter.networkInterfaceId">networkInterfaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session#network_interface_id Ec2TrafficMirrorSession#network_interface_id}. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.Initializer.parameter.sessionNumber">sessionNumber</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session#session_number Ec2TrafficMirrorSession#session_number}. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.Initializer.parameter.trafficMirrorFilterId">trafficMirrorFilterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session#traffic_mirror_filter_id Ec2TrafficMirrorSession#traffic_mirror_filter_id}. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.Initializer.parameter.trafficMirrorTargetId">trafficMirrorTargetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session#traffic_mirror_target_id Ec2TrafficMirrorSession#traffic_mirror_target_id}. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session#description Ec2TrafficMirrorSession#description}. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session#id Ec2TrafficMirrorSession#id}. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.Initializer.parameter.packetLength">packetLength</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session#packet_length Ec2TrafficMirrorSession#packet_length}. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session#tags Ec2TrafficMirrorSession#tags}. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session#tags_all Ec2TrafficMirrorSession#tags_all}. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.Initializer.parameter.virtualNetworkId">virtualNetworkId</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session#virtual_network_id Ec2TrafficMirrorSession#virtual_network_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `networkInterfaceId`<sup>Required</sup> <a name="networkInterfaceId" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.Initializer.parameter.networkInterfaceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session#network_interface_id Ec2TrafficMirrorSession#network_interface_id}.

---

##### `sessionNumber`<sup>Required</sup> <a name="sessionNumber" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.Initializer.parameter.sessionNumber"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session#session_number Ec2TrafficMirrorSession#session_number}.

---

##### `trafficMirrorFilterId`<sup>Required</sup> <a name="trafficMirrorFilterId" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.Initializer.parameter.trafficMirrorFilterId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session#traffic_mirror_filter_id Ec2TrafficMirrorSession#traffic_mirror_filter_id}.

---

##### `trafficMirrorTargetId`<sup>Required</sup> <a name="trafficMirrorTargetId" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.Initializer.parameter.trafficMirrorTargetId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session#traffic_mirror_target_id Ec2TrafficMirrorSession#traffic_mirror_target_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session#description Ec2TrafficMirrorSession#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session#id Ec2TrafficMirrorSession#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `packetLength`<sup>Optional</sup> <a name="packetLength" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.Initializer.parameter.packetLength"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session#packet_length Ec2TrafficMirrorSession#packet_length}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session#tags Ec2TrafficMirrorSession#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session#tags_all Ec2TrafficMirrorSession#tags_all}.

---

##### `virtualNetworkId`<sup>Optional</sup> <a name="virtualNetworkId" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.Initializer.parameter.virtualNetworkId"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session#virtual_network_id Ec2TrafficMirrorSession#virtual_network_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.resetPacketLength">resetPacketLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.resetVirtualNetworkId">resetVirtualNetworkId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.resetId"></a>

```java
public void resetId()
```

##### `resetPacketLength` <a name="resetPacketLength" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.resetPacketLength"></a>

```java
public void resetPacketLength()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetVirtualNetworkId` <a name="resetVirtualNetworkId" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.resetVirtualNetworkId"></a>

```java
public void resetVirtualNetworkId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_traffic_mirror_session.Ec2TrafficMirrorSession;

Ec2TrafficMirrorSession.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_traffic_mirror_session.Ec2TrafficMirrorSession;

Ec2TrafficMirrorSession.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_traffic_mirror_session.Ec2TrafficMirrorSession;

Ec2TrafficMirrorSession.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.ownerId">ownerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.networkInterfaceIdInput">networkInterfaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.packetLengthInput">packetLengthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.sessionNumberInput">sessionNumberInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.trafficMirrorFilterIdInput">trafficMirrorFilterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.trafficMirrorTargetIdInput">trafficMirrorTargetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.virtualNetworkIdInput">virtualNetworkIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.networkInterfaceId">networkInterfaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.packetLength">packetLength</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.sessionNumber">sessionNumber</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.trafficMirrorFilterId">trafficMirrorFilterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.trafficMirrorTargetId">trafficMirrorTargetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.virtualNetworkId">virtualNetworkId</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.ownerId"></a>

```java
public java.lang.String getOwnerId();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `networkInterfaceIdInput`<sup>Optional</sup> <a name="networkInterfaceIdInput" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.networkInterfaceIdInput"></a>

```java
public java.lang.String getNetworkInterfaceIdInput();
```

- *Type:* java.lang.String

---

##### `packetLengthInput`<sup>Optional</sup> <a name="packetLengthInput" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.packetLengthInput"></a>

```java
public java.lang.Number getPacketLengthInput();
```

- *Type:* java.lang.Number

---

##### `sessionNumberInput`<sup>Optional</sup> <a name="sessionNumberInput" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.sessionNumberInput"></a>

```java
public java.lang.Number getSessionNumberInput();
```

- *Type:* java.lang.Number

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `trafficMirrorFilterIdInput`<sup>Optional</sup> <a name="trafficMirrorFilterIdInput" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.trafficMirrorFilterIdInput"></a>

```java
public java.lang.String getTrafficMirrorFilterIdInput();
```

- *Type:* java.lang.String

---

##### `trafficMirrorTargetIdInput`<sup>Optional</sup> <a name="trafficMirrorTargetIdInput" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.trafficMirrorTargetIdInput"></a>

```java
public java.lang.String getTrafficMirrorTargetIdInput();
```

- *Type:* java.lang.String

---

##### `virtualNetworkIdInput`<sup>Optional</sup> <a name="virtualNetworkIdInput" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.virtualNetworkIdInput"></a>

```java
public java.lang.Number getVirtualNetworkIdInput();
```

- *Type:* java.lang.Number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `networkInterfaceId`<sup>Required</sup> <a name="networkInterfaceId" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.networkInterfaceId"></a>

```java
public java.lang.String getNetworkInterfaceId();
```

- *Type:* java.lang.String

---

##### `packetLength`<sup>Required</sup> <a name="packetLength" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.packetLength"></a>

```java
public java.lang.Number getPacketLength();
```

- *Type:* java.lang.Number

---

##### `sessionNumber`<sup>Required</sup> <a name="sessionNumber" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.sessionNumber"></a>

```java
public java.lang.Number getSessionNumber();
```

- *Type:* java.lang.Number

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `trafficMirrorFilterId`<sup>Required</sup> <a name="trafficMirrorFilterId" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.trafficMirrorFilterId"></a>

```java
public java.lang.String getTrafficMirrorFilterId();
```

- *Type:* java.lang.String

---

##### `trafficMirrorTargetId`<sup>Required</sup> <a name="trafficMirrorTargetId" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.trafficMirrorTargetId"></a>

```java
public java.lang.String getTrafficMirrorTargetId();
```

- *Type:* java.lang.String

---

##### `virtualNetworkId`<sup>Required</sup> <a name="virtualNetworkId" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.virtualNetworkId"></a>

```java
public java.lang.Number getVirtualNetworkId();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2TrafficMirrorSessionConfig <a name="Ec2TrafficMirrorSessionConfig" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ec2_traffic_mirror_session.Ec2TrafficMirrorSessionConfig;

Ec2TrafficMirrorSessionConfig.builder()
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
    .networkInterfaceId(java.lang.String)
    .sessionNumber(java.lang.Number)
    .trafficMirrorFilterId(java.lang.String)
    .trafficMirrorTargetId(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .packetLength(java.lang.Number)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .virtualNetworkId(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.networkInterfaceId">networkInterfaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session#network_interface_id Ec2TrafficMirrorSession#network_interface_id}. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.sessionNumber">sessionNumber</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session#session_number Ec2TrafficMirrorSession#session_number}. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.trafficMirrorFilterId">trafficMirrorFilterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session#traffic_mirror_filter_id Ec2TrafficMirrorSession#traffic_mirror_filter_id}. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.trafficMirrorTargetId">trafficMirrorTargetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session#traffic_mirror_target_id Ec2TrafficMirrorSession#traffic_mirror_target_id}. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session#description Ec2TrafficMirrorSession#description}. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session#id Ec2TrafficMirrorSession#id}. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.packetLength">packetLength</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session#packet_length Ec2TrafficMirrorSession#packet_length}. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session#tags Ec2TrafficMirrorSession#tags}. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session#tags_all Ec2TrafficMirrorSession#tags_all}. |
| <code><a href="#@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.virtualNetworkId">virtualNetworkId</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session#virtual_network_id Ec2TrafficMirrorSession#virtual_network_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `networkInterfaceId`<sup>Required</sup> <a name="networkInterfaceId" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.networkInterfaceId"></a>

```java
public java.lang.String getNetworkInterfaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session#network_interface_id Ec2TrafficMirrorSession#network_interface_id}.

---

##### `sessionNumber`<sup>Required</sup> <a name="sessionNumber" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.sessionNumber"></a>

```java
public java.lang.Number getSessionNumber();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session#session_number Ec2TrafficMirrorSession#session_number}.

---

##### `trafficMirrorFilterId`<sup>Required</sup> <a name="trafficMirrorFilterId" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.trafficMirrorFilterId"></a>

```java
public java.lang.String getTrafficMirrorFilterId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session#traffic_mirror_filter_id Ec2TrafficMirrorSession#traffic_mirror_filter_id}.

---

##### `trafficMirrorTargetId`<sup>Required</sup> <a name="trafficMirrorTargetId" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.trafficMirrorTargetId"></a>

```java
public java.lang.String getTrafficMirrorTargetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session#traffic_mirror_target_id Ec2TrafficMirrorSession#traffic_mirror_target_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session#description Ec2TrafficMirrorSession#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session#id Ec2TrafficMirrorSession#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `packetLength`<sup>Optional</sup> <a name="packetLength" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.packetLength"></a>

```java
public java.lang.Number getPacketLength();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session#packet_length Ec2TrafficMirrorSession#packet_length}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session#tags Ec2TrafficMirrorSession#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session#tags_all Ec2TrafficMirrorSession#tags_all}.

---

##### `virtualNetworkId`<sup>Optional</sup> <a name="virtualNetworkId" id="@cdktf/provider-aws.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.virtualNetworkId"></a>

```java
public java.lang.Number getVirtualNetworkId();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session#virtual_network_id Ec2TrafficMirrorSession#virtual_network_id}.

---



