# `medialiveInput` Submodule <a name="`medialiveInput` Submodule" id="@cdktf/provider-aws.medialiveInput"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MedialiveInput <a name="MedialiveInput" id="@cdktf/provider-aws.medialiveInput.MedialiveInput"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/medialive_input aws_medialive_input}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.medialive_input.MedialiveInput;

MedialiveInput.Builder.create(Construct scope, java.lang.String id)
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
    .type(java.lang.String)
//  .destinations(IResolvable)
//  .destinations(java.util.List<MedialiveInputDestinations>)
//  .id(java.lang.String)
//  .inputDevices(IResolvable)
//  .inputDevices(java.util.List<MedialiveInputInputDevices>)
//  .inputSecurityGroups(java.util.List<java.lang.String>)
//  .mediaConnectFlows(IResolvable)
//  .mediaConnectFlows(java.util.List<MedialiveInputMediaConnectFlows>)
//  .roleArn(java.lang.String)
//  .sources(IResolvable)
//  .sources(java.util.List<MedialiveInputSources>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(MedialiveInputTimeouts)
//  .vpc(MedialiveInputVpc)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInput.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInput.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInput.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInput.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInput.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInput.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInput.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInput.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInput.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInput.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_input#name MedialiveInput#name}. |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInput.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_input#type MedialiveInput#type}. |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInput.Initializer.parameter.destinations">destinations</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputDestinations">MedialiveInputDestinations</a>></code> | destinations block. |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInput.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_input#id MedialiveInput#id}. |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInput.Initializer.parameter.inputDevices">inputDevices</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputInputDevices">MedialiveInputInputDevices</a>></code> | input_devices block. |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInput.Initializer.parameter.inputSecurityGroups">inputSecurityGroups</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_input#input_security_groups MedialiveInput#input_security_groups}. |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInput.Initializer.parameter.mediaConnectFlows">mediaConnectFlows</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputMediaConnectFlows">MedialiveInputMediaConnectFlows</a>></code> | media_connect_flows block. |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInput.Initializer.parameter.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_input#role_arn MedialiveInput#role_arn}. |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInput.Initializer.parameter.sources">sources</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputSources">MedialiveInputSources</a>></code> | sources block. |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInput.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_input#tags MedialiveInput#tags}. |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInput.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_input#tags_all MedialiveInput#tags_all}. |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInput.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputTimeouts">MedialiveInputTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInput.Initializer.parameter.vpc">vpc</a></code> | <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputVpc">MedialiveInputVpc</a></code> | vpc block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_input#name MedialiveInput#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_input#type MedialiveInput#type}.

---

##### `destinations`<sup>Optional</sup> <a name="destinations" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.Initializer.parameter.destinations"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputDestinations">MedialiveInputDestinations</a>>

destinations block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_input#destinations MedialiveInput#destinations}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_input#id MedialiveInput#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inputDevices`<sup>Optional</sup> <a name="inputDevices" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.Initializer.parameter.inputDevices"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputInputDevices">MedialiveInputInputDevices</a>>

input_devices block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_input#input_devices MedialiveInput#input_devices}

---

##### `inputSecurityGroups`<sup>Optional</sup> <a name="inputSecurityGroups" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.Initializer.parameter.inputSecurityGroups"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_input#input_security_groups MedialiveInput#input_security_groups}.

---

##### `mediaConnectFlows`<sup>Optional</sup> <a name="mediaConnectFlows" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.Initializer.parameter.mediaConnectFlows"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputMediaConnectFlows">MedialiveInputMediaConnectFlows</a>>

media_connect_flows block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_input#media_connect_flows MedialiveInput#media_connect_flows}

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.Initializer.parameter.roleArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_input#role_arn MedialiveInput#role_arn}.

---

##### `sources`<sup>Optional</sup> <a name="sources" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.Initializer.parameter.sources"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputSources">MedialiveInputSources</a>>

sources block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_input#sources MedialiveInput#sources}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_input#tags MedialiveInput#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_input#tags_all MedialiveInput#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputTimeouts">MedialiveInputTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_input#timeouts MedialiveInput#timeouts}

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.Initializer.parameter.vpc"></a>

- *Type:* <a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputVpc">MedialiveInputVpc</a>

vpc block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_input#vpc MedialiveInput#vpc}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInput.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInput.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInput.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInput.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInput.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInput.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInput.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInput.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInput.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInput.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInput.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInput.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInput.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInput.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInput.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInput.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInput.putDestinations">putDestinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInput.putInputDevices">putInputDevices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInput.putMediaConnectFlows">putMediaConnectFlows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInput.putSources">putSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInput.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInput.putVpc">putVpc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInput.resetDestinations">resetDestinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInput.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInput.resetInputDevices">resetInputDevices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInput.resetInputSecurityGroups">resetInputSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInput.resetMediaConnectFlows">resetMediaConnectFlows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInput.resetRoleArn">resetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInput.resetSources">resetSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInput.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInput.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInput.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInput.resetVpc">resetVpc</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putDestinations` <a name="putDestinations" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.putDestinations"></a>

```java
public void putDestinations(IResolvable OR java.util.List<MedialiveInputDestinations> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.putDestinations.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputDestinations">MedialiveInputDestinations</a>>

---

##### `putInputDevices` <a name="putInputDevices" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.putInputDevices"></a>

```java
public void putInputDevices(IResolvable OR java.util.List<MedialiveInputInputDevices> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.putInputDevices.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputInputDevices">MedialiveInputInputDevices</a>>

---

##### `putMediaConnectFlows` <a name="putMediaConnectFlows" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.putMediaConnectFlows"></a>

```java
public void putMediaConnectFlows(IResolvable OR java.util.List<MedialiveInputMediaConnectFlows> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.putMediaConnectFlows.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputMediaConnectFlows">MedialiveInputMediaConnectFlows</a>>

---

##### `putSources` <a name="putSources" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.putSources"></a>

```java
public void putSources(IResolvable OR java.util.List<MedialiveInputSources> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.putSources.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputSources">MedialiveInputSources</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.putTimeouts"></a>

```java
public void putTimeouts(MedialiveInputTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputTimeouts">MedialiveInputTimeouts</a>

---

##### `putVpc` <a name="putVpc" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.putVpc"></a>

```java
public void putVpc(MedialiveInputVpc value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.putVpc.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputVpc">MedialiveInputVpc</a>

---

##### `resetDestinations` <a name="resetDestinations" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.resetDestinations"></a>

```java
public void resetDestinations()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.resetId"></a>

```java
public void resetId()
```

##### `resetInputDevices` <a name="resetInputDevices" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.resetInputDevices"></a>

```java
public void resetInputDevices()
```

##### `resetInputSecurityGroups` <a name="resetInputSecurityGroups" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.resetInputSecurityGroups"></a>

```java
public void resetInputSecurityGroups()
```

##### `resetMediaConnectFlows` <a name="resetMediaConnectFlows" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.resetMediaConnectFlows"></a>

```java
public void resetMediaConnectFlows()
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.resetRoleArn"></a>

```java
public void resetRoleArn()
```

##### `resetSources` <a name="resetSources" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.resetSources"></a>

```java
public void resetSources()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetVpc` <a name="resetVpc" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.resetVpc"></a>

```java
public void resetVpc()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInput.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInput.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInput.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.medialive_input.MedialiveInput;

MedialiveInput.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.medialive_input.MedialiveInput;

MedialiveInput.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.medialive_input.MedialiveInput;

MedialiveInput.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInput.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInput.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInput.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInput.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInput.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInput.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInput.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInput.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInput.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInput.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInput.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInput.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInput.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInput.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInput.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInput.property.attachedChannels">attachedChannels</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInput.property.destinations">destinations</a></code> | <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputDestinationsList">MedialiveInputDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInput.property.inputClass">inputClass</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInput.property.inputDevices">inputDevices</a></code> | <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputInputDevicesList">MedialiveInputInputDevicesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInput.property.inputPartnerIds">inputPartnerIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInput.property.inputSourceType">inputSourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInput.property.mediaConnectFlows">mediaConnectFlows</a></code> | <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputMediaConnectFlowsList">MedialiveInputMediaConnectFlowsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInput.property.sources">sources</a></code> | <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputSourcesList">MedialiveInputSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInput.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputTimeoutsOutputReference">MedialiveInputTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInput.property.vpc">vpc</a></code> | <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputVpcOutputReference">MedialiveInputVpcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInput.property.destinationsInput">destinationsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputDestinations">MedialiveInputDestinations</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInput.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInput.property.inputDevicesInput">inputDevicesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputInputDevices">MedialiveInputInputDevices</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInput.property.inputSecurityGroupsInput">inputSecurityGroupsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInput.property.mediaConnectFlowsInput">mediaConnectFlowsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputMediaConnectFlows">MedialiveInputMediaConnectFlows</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInput.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInput.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInput.property.sourcesInput">sourcesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputSources">MedialiveInputSources</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInput.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInput.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInput.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputTimeouts">MedialiveInputTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInput.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInput.property.vpcInput">vpcInput</a></code> | <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputVpc">MedialiveInputVpc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInput.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInput.property.inputSecurityGroups">inputSecurityGroups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInput.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInput.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInput.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInput.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInput.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `attachedChannels`<sup>Required</sup> <a name="attachedChannels" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.property.attachedChannels"></a>

```java
public java.util.List<java.lang.String> getAttachedChannels();
```

- *Type:* java.util.List<java.lang.String>

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.property.destinations"></a>

```java
public MedialiveInputDestinationsList getDestinations();
```

- *Type:* <a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputDestinationsList">MedialiveInputDestinationsList</a>

---

##### `inputClass`<sup>Required</sup> <a name="inputClass" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.property.inputClass"></a>

```java
public java.lang.String getInputClass();
```

- *Type:* java.lang.String

---

##### `inputDevices`<sup>Required</sup> <a name="inputDevices" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.property.inputDevices"></a>

```java
public MedialiveInputInputDevicesList getInputDevices();
```

- *Type:* <a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputInputDevicesList">MedialiveInputInputDevicesList</a>

---

##### `inputPartnerIds`<sup>Required</sup> <a name="inputPartnerIds" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.property.inputPartnerIds"></a>

```java
public java.util.List<java.lang.String> getInputPartnerIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `inputSourceType`<sup>Required</sup> <a name="inputSourceType" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.property.inputSourceType"></a>

```java
public java.lang.String getInputSourceType();
```

- *Type:* java.lang.String

---

##### `mediaConnectFlows`<sup>Required</sup> <a name="mediaConnectFlows" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.property.mediaConnectFlows"></a>

```java
public MedialiveInputMediaConnectFlowsList getMediaConnectFlows();
```

- *Type:* <a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputMediaConnectFlowsList">MedialiveInputMediaConnectFlowsList</a>

---

##### `sources`<sup>Required</sup> <a name="sources" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.property.sources"></a>

```java
public MedialiveInputSourcesList getSources();
```

- *Type:* <a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputSourcesList">MedialiveInputSourcesList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.property.timeouts"></a>

```java
public MedialiveInputTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputTimeoutsOutputReference">MedialiveInputTimeoutsOutputReference</a>

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.property.vpc"></a>

```java
public MedialiveInputVpcOutputReference getVpc();
```

- *Type:* <a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputVpcOutputReference">MedialiveInputVpcOutputReference</a>

---

##### `destinationsInput`<sup>Optional</sup> <a name="destinationsInput" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.property.destinationsInput"></a>

```java
public java.lang.Object getDestinationsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputDestinations">MedialiveInputDestinations</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `inputDevicesInput`<sup>Optional</sup> <a name="inputDevicesInput" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.property.inputDevicesInput"></a>

```java
public java.lang.Object getInputDevicesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputInputDevices">MedialiveInputInputDevices</a>>

---

##### `inputSecurityGroupsInput`<sup>Optional</sup> <a name="inputSecurityGroupsInput" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.property.inputSecurityGroupsInput"></a>

```java
public java.util.List<java.lang.String> getInputSecurityGroupsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `mediaConnectFlowsInput`<sup>Optional</sup> <a name="mediaConnectFlowsInput" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.property.mediaConnectFlowsInput"></a>

```java
public java.lang.Object getMediaConnectFlowsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputMediaConnectFlows">MedialiveInputMediaConnectFlows</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `sourcesInput`<sup>Optional</sup> <a name="sourcesInput" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.property.sourcesInput"></a>

```java
public java.lang.Object getSourcesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputSources">MedialiveInputSources</a>>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputTimeouts">MedialiveInputTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `vpcInput`<sup>Optional</sup> <a name="vpcInput" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.property.vpcInput"></a>

```java
public MedialiveInputVpc getVpcInput();
```

- *Type:* <a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputVpc">MedialiveInputVpc</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `inputSecurityGroups`<sup>Required</sup> <a name="inputSecurityGroups" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.property.inputSecurityGroups"></a>

```java
public java.util.List<java.lang.String> getInputSecurityGroups();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInput.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.medialiveInput.MedialiveInput.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MedialiveInputConfig <a name="MedialiveInputConfig" id="@cdktf/provider-aws.medialiveInput.MedialiveInputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.medialiveInput.MedialiveInputConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.medialive_input.MedialiveInputConfig;

MedialiveInputConfig.builder()
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
    .type(java.lang.String)
//  .destinations(IResolvable)
//  .destinations(java.util.List<MedialiveInputDestinations>)
//  .id(java.lang.String)
//  .inputDevices(IResolvable)
//  .inputDevices(java.util.List<MedialiveInputInputDevices>)
//  .inputSecurityGroups(java.util.List<java.lang.String>)
//  .mediaConnectFlows(IResolvable)
//  .mediaConnectFlows(java.util.List<MedialiveInputMediaConnectFlows>)
//  .roleArn(java.lang.String)
//  .sources(IResolvable)
//  .sources(java.util.List<MedialiveInputSources>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(MedialiveInputTimeouts)
//  .vpc(MedialiveInputVpc)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_input#name MedialiveInput#name}. |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputConfig.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_input#type MedialiveInput#type}. |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputConfig.property.destinations">destinations</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputDestinations">MedialiveInputDestinations</a>></code> | destinations block. |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_input#id MedialiveInput#id}. |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputConfig.property.inputDevices">inputDevices</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputInputDevices">MedialiveInputInputDevices</a>></code> | input_devices block. |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputConfig.property.inputSecurityGroups">inputSecurityGroups</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_input#input_security_groups MedialiveInput#input_security_groups}. |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputConfig.property.mediaConnectFlows">mediaConnectFlows</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputMediaConnectFlows">MedialiveInputMediaConnectFlows</a>></code> | media_connect_flows block. |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputConfig.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_input#role_arn MedialiveInput#role_arn}. |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputConfig.property.sources">sources</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputSources">MedialiveInputSources</a>></code> | sources block. |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_input#tags MedialiveInput#tags}. |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_input#tags_all MedialiveInput#tags_all}. |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputTimeouts">MedialiveInputTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputConfig.property.vpc">vpc</a></code> | <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputVpc">MedialiveInputVpc</a></code> | vpc block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.medialiveInput.MedialiveInputConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.medialiveInput.MedialiveInputConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.medialiveInput.MedialiveInputConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.medialiveInput.MedialiveInputConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.medialiveInput.MedialiveInputConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.medialiveInput.MedialiveInputConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.medialiveInput.MedialiveInputConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.medialiveInput.MedialiveInputConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_input#name MedialiveInput#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.medialiveInput.MedialiveInputConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_input#type MedialiveInput#type}.

---

##### `destinations`<sup>Optional</sup> <a name="destinations" id="@cdktf/provider-aws.medialiveInput.MedialiveInputConfig.property.destinations"></a>

```java
public java.lang.Object getDestinations();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputDestinations">MedialiveInputDestinations</a>>

destinations block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_input#destinations MedialiveInput#destinations}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.medialiveInput.MedialiveInputConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_input#id MedialiveInput#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inputDevices`<sup>Optional</sup> <a name="inputDevices" id="@cdktf/provider-aws.medialiveInput.MedialiveInputConfig.property.inputDevices"></a>

```java
public java.lang.Object getInputDevices();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputInputDevices">MedialiveInputInputDevices</a>>

input_devices block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_input#input_devices MedialiveInput#input_devices}

---

##### `inputSecurityGroups`<sup>Optional</sup> <a name="inputSecurityGroups" id="@cdktf/provider-aws.medialiveInput.MedialiveInputConfig.property.inputSecurityGroups"></a>

```java
public java.util.List<java.lang.String> getInputSecurityGroups();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_input#input_security_groups MedialiveInput#input_security_groups}.

---

##### `mediaConnectFlows`<sup>Optional</sup> <a name="mediaConnectFlows" id="@cdktf/provider-aws.medialiveInput.MedialiveInputConfig.property.mediaConnectFlows"></a>

```java
public java.lang.Object getMediaConnectFlows();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputMediaConnectFlows">MedialiveInputMediaConnectFlows</a>>

media_connect_flows block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_input#media_connect_flows MedialiveInput#media_connect_flows}

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktf/provider-aws.medialiveInput.MedialiveInputConfig.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_input#role_arn MedialiveInput#role_arn}.

---

##### `sources`<sup>Optional</sup> <a name="sources" id="@cdktf/provider-aws.medialiveInput.MedialiveInputConfig.property.sources"></a>

```java
public java.lang.Object getSources();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputSources">MedialiveInputSources</a>>

sources block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_input#sources MedialiveInput#sources}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.medialiveInput.MedialiveInputConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_input#tags MedialiveInput#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.medialiveInput.MedialiveInputConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_input#tags_all MedialiveInput#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.medialiveInput.MedialiveInputConfig.property.timeouts"></a>

```java
public MedialiveInputTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputTimeouts">MedialiveInputTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_input#timeouts MedialiveInput#timeouts}

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="@cdktf/provider-aws.medialiveInput.MedialiveInputConfig.property.vpc"></a>

```java
public MedialiveInputVpc getVpc();
```

- *Type:* <a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputVpc">MedialiveInputVpc</a>

vpc block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_input#vpc MedialiveInput#vpc}

---

### MedialiveInputDestinations <a name="MedialiveInputDestinations" id="@cdktf/provider-aws.medialiveInput.MedialiveInputDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.medialiveInput.MedialiveInputDestinations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.medialive_input.MedialiveInputDestinations;

MedialiveInputDestinations.builder()
    .streamName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputDestinations.property.streamName">streamName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_input#stream_name MedialiveInput#stream_name}. |

---

##### `streamName`<sup>Required</sup> <a name="streamName" id="@cdktf/provider-aws.medialiveInput.MedialiveInputDestinations.property.streamName"></a>

```java
public java.lang.String getStreamName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_input#stream_name MedialiveInput#stream_name}.

---

### MedialiveInputInputDevices <a name="MedialiveInputInputDevices" id="@cdktf/provider-aws.medialiveInput.MedialiveInputInputDevices"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.medialiveInput.MedialiveInputInputDevices.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.medialive_input.MedialiveInputInputDevices;

MedialiveInputInputDevices.builder()
    .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputInputDevices.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_input#id MedialiveInput#id}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.medialiveInput.MedialiveInputInputDevices.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_input#id MedialiveInput#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### MedialiveInputMediaConnectFlows <a name="MedialiveInputMediaConnectFlows" id="@cdktf/provider-aws.medialiveInput.MedialiveInputMediaConnectFlows"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.medialiveInput.MedialiveInputMediaConnectFlows.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.medialive_input.MedialiveInputMediaConnectFlows;

MedialiveInputMediaConnectFlows.builder()
    .flowArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputMediaConnectFlows.property.flowArn">flowArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_input#flow_arn MedialiveInput#flow_arn}. |

---

##### `flowArn`<sup>Required</sup> <a name="flowArn" id="@cdktf/provider-aws.medialiveInput.MedialiveInputMediaConnectFlows.property.flowArn"></a>

```java
public java.lang.String getFlowArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_input#flow_arn MedialiveInput#flow_arn}.

---

### MedialiveInputSources <a name="MedialiveInputSources" id="@cdktf/provider-aws.medialiveInput.MedialiveInputSources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.medialiveInput.MedialiveInputSources.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.medialive_input.MedialiveInputSources;

MedialiveInputSources.builder()
    .passwordParam(java.lang.String)
    .url(java.lang.String)
    .username(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputSources.property.passwordParam">passwordParam</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_input#password_param MedialiveInput#password_param}. |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputSources.property.url">url</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_input#url MedialiveInput#url}. |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputSources.property.username">username</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_input#username MedialiveInput#username}. |

---

##### `passwordParam`<sup>Required</sup> <a name="passwordParam" id="@cdktf/provider-aws.medialiveInput.MedialiveInputSources.property.passwordParam"></a>

```java
public java.lang.String getPasswordParam();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_input#password_param MedialiveInput#password_param}.

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-aws.medialiveInput.MedialiveInputSources.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_input#url MedialiveInput#url}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-aws.medialiveInput.MedialiveInputSources.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_input#username MedialiveInput#username}.

---

### MedialiveInputTimeouts <a name="MedialiveInputTimeouts" id="@cdktf/provider-aws.medialiveInput.MedialiveInputTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.medialiveInput.MedialiveInputTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.medialive_input.MedialiveInputTimeouts;

MedialiveInputTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_input#create MedialiveInput#create}. |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_input#delete MedialiveInput#delete}. |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_input#update MedialiveInput#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.medialiveInput.MedialiveInputTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_input#create MedialiveInput#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.medialiveInput.MedialiveInputTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_input#delete MedialiveInput#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.medialiveInput.MedialiveInputTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_input#update MedialiveInput#update}.

---

### MedialiveInputVpc <a name="MedialiveInputVpc" id="@cdktf/provider-aws.medialiveInput.MedialiveInputVpc"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.medialiveInput.MedialiveInputVpc.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.medialive_input.MedialiveInputVpc;

MedialiveInputVpc.builder()
    .subnetIds(java.util.List<java.lang.String>)
//  .securityGroupIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputVpc.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_input#subnet_ids MedialiveInput#subnet_ids}. |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputVpc.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_input#security_group_ids MedialiveInput#security_group_ids}. |

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/provider-aws.medialiveInput.MedialiveInputVpc.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_input#subnet_ids MedialiveInput#subnet_ids}.

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktf/provider-aws.medialiveInput.MedialiveInputVpc.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_input#security_group_ids MedialiveInput#security_group_ids}.

---

## Classes <a name="Classes" id="Classes"></a>

### MedialiveInputDestinationsList <a name="MedialiveInputDestinationsList" id="@cdktf/provider-aws.medialiveInput.MedialiveInputDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.medialiveInput.MedialiveInputDestinationsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.medialive_input.MedialiveInputDestinationsList;

new MedialiveInputDestinationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.medialiveInput.MedialiveInputDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.medialiveInput.MedialiveInputDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputDestinationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputDestinationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputDestinationsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.medialiveInput.MedialiveInputDestinationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.medialiveInput.MedialiveInputDestinationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.medialiveInput.MedialiveInputDestinationsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.medialiveInput.MedialiveInputDestinationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.medialiveInput.MedialiveInputDestinationsList.get"></a>

```java
public MedialiveInputDestinationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.medialiveInput.MedialiveInputDestinationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputDestinationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputDestinationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputDestinationsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputDestinations">MedialiveInputDestinations</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.medialiveInput.MedialiveInputDestinationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.medialiveInput.MedialiveInputDestinationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.medialiveInput.MedialiveInputDestinationsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputDestinations">MedialiveInputDestinations</a>>

---


### MedialiveInputDestinationsOutputReference <a name="MedialiveInputDestinationsOutputReference" id="@cdktf/provider-aws.medialiveInput.MedialiveInputDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.medialiveInput.MedialiveInputDestinationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.medialive_input.MedialiveInputDestinationsOutputReference;

new MedialiveInputDestinationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.medialiveInput.MedialiveInputDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.medialiveInput.MedialiveInputDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.medialiveInput.MedialiveInputDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputDestinationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputDestinationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputDestinationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputDestinationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputDestinationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputDestinationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputDestinationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputDestinationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputDestinationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputDestinationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputDestinationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputDestinationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.medialiveInput.MedialiveInputDestinationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputDestinationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputDestinationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputDestinationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputDestinationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputDestinationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputDestinationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputDestinationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputDestinationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputDestinationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputDestinationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.medialiveInput.MedialiveInputDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.medialiveInput.MedialiveInputDestinationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.medialiveInput.MedialiveInputDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.medialiveInput.MedialiveInputDestinationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputDestinationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputDestinationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputDestinationsOutputReference.property.streamNameInput">streamNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputDestinationsOutputReference.property.streamName">streamName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputDestinationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputDestinations">MedialiveInputDestinations</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.medialiveInput.MedialiveInputDestinationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.medialiveInput.MedialiveInputDestinationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `streamNameInput`<sup>Optional</sup> <a name="streamNameInput" id="@cdktf/provider-aws.medialiveInput.MedialiveInputDestinationsOutputReference.property.streamNameInput"></a>

```java
public java.lang.String getStreamNameInput();
```

- *Type:* java.lang.String

---

##### `streamName`<sup>Required</sup> <a name="streamName" id="@cdktf/provider-aws.medialiveInput.MedialiveInputDestinationsOutputReference.property.streamName"></a>

```java
public java.lang.String getStreamName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.medialiveInput.MedialiveInputDestinationsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputDestinations">MedialiveInputDestinations</a> OR com.hashicorp.cdktf.IResolvable

---


### MedialiveInputInputDevicesList <a name="MedialiveInputInputDevicesList" id="@cdktf/provider-aws.medialiveInput.MedialiveInputInputDevicesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.medialiveInput.MedialiveInputInputDevicesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.medialive_input.MedialiveInputInputDevicesList;

new MedialiveInputInputDevicesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputInputDevicesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputInputDevicesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputInputDevicesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.medialiveInput.MedialiveInputInputDevicesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputInputDevicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.medialiveInput.MedialiveInputInputDevicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputInputDevicesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputInputDevicesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputInputDevicesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputInputDevicesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.medialiveInput.MedialiveInputInputDevicesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.medialiveInput.MedialiveInputInputDevicesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.medialiveInput.MedialiveInputInputDevicesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.medialiveInput.MedialiveInputInputDevicesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.medialiveInput.MedialiveInputInputDevicesList.get"></a>

```java
public MedialiveInputInputDevicesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.medialiveInput.MedialiveInputInputDevicesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputInputDevicesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputInputDevicesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputInputDevicesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputInputDevices">MedialiveInputInputDevices</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.medialiveInput.MedialiveInputInputDevicesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.medialiveInput.MedialiveInputInputDevicesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.medialiveInput.MedialiveInputInputDevicesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputInputDevices">MedialiveInputInputDevices</a>>

---


### MedialiveInputInputDevicesOutputReference <a name="MedialiveInputInputDevicesOutputReference" id="@cdktf/provider-aws.medialiveInput.MedialiveInputInputDevicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.medialiveInput.MedialiveInputInputDevicesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.medialive_input.MedialiveInputInputDevicesOutputReference;

new MedialiveInputInputDevicesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputInputDevicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputInputDevicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputInputDevicesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputInputDevicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.medialiveInput.MedialiveInputInputDevicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputInputDevicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.medialiveInput.MedialiveInputInputDevicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.medialiveInput.MedialiveInputInputDevicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputInputDevicesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputInputDevicesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputInputDevicesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputInputDevicesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputInputDevicesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputInputDevicesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputInputDevicesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputInputDevicesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputInputDevicesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputInputDevicesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputInputDevicesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputInputDevicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputInputDevicesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.medialiveInput.MedialiveInputInputDevicesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputInputDevicesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputInputDevicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputInputDevicesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputInputDevicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputInputDevicesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputInputDevicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputInputDevicesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputInputDevicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputInputDevicesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputInputDevicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputInputDevicesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputInputDevicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputInputDevicesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputInputDevicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputInputDevicesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputInputDevicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputInputDevicesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputInputDevicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputInputDevicesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.medialiveInput.MedialiveInputInputDevicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.medialiveInput.MedialiveInputInputDevicesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.medialiveInput.MedialiveInputInputDevicesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.medialiveInput.MedialiveInputInputDevicesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputInputDevicesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputInputDevicesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputInputDevicesOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputInputDevicesOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputInputDevicesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputInputDevices">MedialiveInputInputDevices</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.medialiveInput.MedialiveInputInputDevicesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.medialiveInput.MedialiveInputInputDevicesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.medialiveInput.MedialiveInputInputDevicesOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.medialiveInput.MedialiveInputInputDevicesOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.medialiveInput.MedialiveInputInputDevicesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputInputDevices">MedialiveInputInputDevices</a> OR com.hashicorp.cdktf.IResolvable

---


### MedialiveInputMediaConnectFlowsList <a name="MedialiveInputMediaConnectFlowsList" id="@cdktf/provider-aws.medialiveInput.MedialiveInputMediaConnectFlowsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.medialiveInput.MedialiveInputMediaConnectFlowsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.medialive_input.MedialiveInputMediaConnectFlowsList;

new MedialiveInputMediaConnectFlowsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputMediaConnectFlowsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputMediaConnectFlowsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputMediaConnectFlowsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.medialiveInput.MedialiveInputMediaConnectFlowsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputMediaConnectFlowsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.medialiveInput.MedialiveInputMediaConnectFlowsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputMediaConnectFlowsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputMediaConnectFlowsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputMediaConnectFlowsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputMediaConnectFlowsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.medialiveInput.MedialiveInputMediaConnectFlowsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.medialiveInput.MedialiveInputMediaConnectFlowsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.medialiveInput.MedialiveInputMediaConnectFlowsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.medialiveInput.MedialiveInputMediaConnectFlowsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.medialiveInput.MedialiveInputMediaConnectFlowsList.get"></a>

```java
public MedialiveInputMediaConnectFlowsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.medialiveInput.MedialiveInputMediaConnectFlowsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputMediaConnectFlowsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputMediaConnectFlowsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputMediaConnectFlowsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputMediaConnectFlows">MedialiveInputMediaConnectFlows</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.medialiveInput.MedialiveInputMediaConnectFlowsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.medialiveInput.MedialiveInputMediaConnectFlowsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.medialiveInput.MedialiveInputMediaConnectFlowsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputMediaConnectFlows">MedialiveInputMediaConnectFlows</a>>

---


### MedialiveInputMediaConnectFlowsOutputReference <a name="MedialiveInputMediaConnectFlowsOutputReference" id="@cdktf/provider-aws.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.medialive_input.MedialiveInputMediaConnectFlowsOutputReference;

new MedialiveInputMediaConnectFlowsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.property.flowArnInput">flowArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.property.flowArn">flowArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputMediaConnectFlows">MedialiveInputMediaConnectFlows</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `flowArnInput`<sup>Optional</sup> <a name="flowArnInput" id="@cdktf/provider-aws.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.property.flowArnInput"></a>

```java
public java.lang.String getFlowArnInput();
```

- *Type:* java.lang.String

---

##### `flowArn`<sup>Required</sup> <a name="flowArn" id="@cdktf/provider-aws.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.property.flowArn"></a>

```java
public java.lang.String getFlowArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputMediaConnectFlows">MedialiveInputMediaConnectFlows</a> OR com.hashicorp.cdktf.IResolvable

---


### MedialiveInputSourcesList <a name="MedialiveInputSourcesList" id="@cdktf/provider-aws.medialiveInput.MedialiveInputSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.medialiveInput.MedialiveInputSourcesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.medialive_input.MedialiveInputSourcesList;

new MedialiveInputSourcesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.medialiveInput.MedialiveInputSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.medialiveInput.MedialiveInputSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputSourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputSourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputSourcesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.medialiveInput.MedialiveInputSourcesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.medialiveInput.MedialiveInputSourcesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.medialiveInput.MedialiveInputSourcesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.medialiveInput.MedialiveInputSourcesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.medialiveInput.MedialiveInputSourcesList.get"></a>

```java
public MedialiveInputSourcesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.medialiveInput.MedialiveInputSourcesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputSourcesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputSourcesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputSourcesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputSources">MedialiveInputSources</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.medialiveInput.MedialiveInputSourcesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.medialiveInput.MedialiveInputSourcesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.medialiveInput.MedialiveInputSourcesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputSources">MedialiveInputSources</a>>

---


### MedialiveInputSourcesOutputReference <a name="MedialiveInputSourcesOutputReference" id="@cdktf/provider-aws.medialiveInput.MedialiveInputSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.medialiveInput.MedialiveInputSourcesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.medialive_input.MedialiveInputSourcesOutputReference;

new MedialiveInputSourcesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.medialiveInput.MedialiveInputSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.medialiveInput.MedialiveInputSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.medialiveInput.MedialiveInputSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputSourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputSourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputSourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputSourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputSourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputSourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputSourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputSourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputSourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputSourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputSourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputSourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.medialiveInput.MedialiveInputSourcesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputSourcesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputSourcesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputSourcesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputSourcesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputSourcesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputSourcesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputSourcesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputSourcesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputSourcesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputSourcesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.medialiveInput.MedialiveInputSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.medialiveInput.MedialiveInputSourcesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.medialiveInput.MedialiveInputSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.medialiveInput.MedialiveInputSourcesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputSourcesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputSourcesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputSourcesOutputReference.property.passwordParamInput">passwordParamInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputSourcesOutputReference.property.urlInput">urlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputSourcesOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputSourcesOutputReference.property.passwordParam">passwordParam</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputSourcesOutputReference.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputSourcesOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputSourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputSources">MedialiveInputSources</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.medialiveInput.MedialiveInputSourcesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.medialiveInput.MedialiveInputSourcesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `passwordParamInput`<sup>Optional</sup> <a name="passwordParamInput" id="@cdktf/provider-aws.medialiveInput.MedialiveInputSourcesOutputReference.property.passwordParamInput"></a>

```java
public java.lang.String getPasswordParamInput();
```

- *Type:* java.lang.String

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-aws.medialiveInput.MedialiveInputSourcesOutputReference.property.urlInput"></a>

```java
public java.lang.String getUrlInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-aws.medialiveInput.MedialiveInputSourcesOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `passwordParam`<sup>Required</sup> <a name="passwordParam" id="@cdktf/provider-aws.medialiveInput.MedialiveInputSourcesOutputReference.property.passwordParam"></a>

```java
public java.lang.String getPasswordParam();
```

- *Type:* java.lang.String

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-aws.medialiveInput.MedialiveInputSourcesOutputReference.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-aws.medialiveInput.MedialiveInputSourcesOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.medialiveInput.MedialiveInputSourcesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputSources">MedialiveInputSources</a> OR com.hashicorp.cdktf.IResolvable

---


### MedialiveInputTimeoutsOutputReference <a name="MedialiveInputTimeoutsOutputReference" id="@cdktf/provider-aws.medialiveInput.MedialiveInputTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.medialiveInput.MedialiveInputTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.medialive_input.MedialiveInputTimeoutsOutputReference;

new MedialiveInputTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.medialiveInput.MedialiveInputTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.medialiveInput.MedialiveInputTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.medialiveInput.MedialiveInputTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.medialiveInput.MedialiveInputTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.medialiveInput.MedialiveInputTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.medialiveInput.MedialiveInputTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.medialiveInput.MedialiveInputTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.medialiveInput.MedialiveInputTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.medialiveInput.MedialiveInputTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputTimeouts">MedialiveInputTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.medialiveInput.MedialiveInputTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.medialiveInput.MedialiveInputTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.medialiveInput.MedialiveInputTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.medialiveInput.MedialiveInputTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.medialiveInput.MedialiveInputTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.medialiveInput.MedialiveInputTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.medialiveInput.MedialiveInputTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.medialiveInput.MedialiveInputTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.medialiveInput.MedialiveInputTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputTimeouts">MedialiveInputTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---


### MedialiveInputVpcOutputReference <a name="MedialiveInputVpcOutputReference" id="@cdktf/provider-aws.medialiveInput.MedialiveInputVpcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.medialiveInput.MedialiveInputVpcOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.medialive_input.MedialiveInputVpcOutputReference;

new MedialiveInputVpcOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputVpcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputVpcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.medialiveInput.MedialiveInputVpcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputVpcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputVpcOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputVpcOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputVpcOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputVpcOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputVpcOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputVpcOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputVpcOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputVpcOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputVpcOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputVpcOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputVpcOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputVpcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputVpcOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputVpcOutputReference.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.medialiveInput.MedialiveInputVpcOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputVpcOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputVpcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputVpcOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputVpcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputVpcOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputVpcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputVpcOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputVpcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputVpcOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputVpcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputVpcOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputVpcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputVpcOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputVpcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputVpcOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputVpcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputVpcOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputVpcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.medialiveInput.MedialiveInputVpcOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.medialiveInput.MedialiveInputVpcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.medialiveInput.MedialiveInputVpcOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.medialiveInput.MedialiveInputVpcOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.medialiveInput.MedialiveInputVpcOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@cdktf/provider-aws.medialiveInput.MedialiveInputVpcOutputReference.resetSecurityGroupIds"></a>

```java
public void resetSecurityGroupIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputVpcOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputVpcOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputVpcOutputReference.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputVpcOutputReference.property.subnetIdsInput">subnetIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputVpcOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputVpcOutputReference.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputVpcOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputVpc">MedialiveInputVpc</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.medialiveInput.MedialiveInputVpcOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.medialiveInput.MedialiveInputVpcOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktf/provider-aws.medialiveInput.MedialiveInputVpcOutputReference.property.securityGroupIdsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktf/provider-aws.medialiveInput.MedialiveInputVpcOutputReference.property.subnetIdsInput"></a>

```java
public java.util.List<java.lang.String> getSubnetIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktf/provider-aws.medialiveInput.MedialiveInputVpcOutputReference.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/provider-aws.medialiveInput.MedialiveInputVpcOutputReference.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.medialiveInput.MedialiveInputVpcOutputReference.property.internalValue"></a>

```java
public MedialiveInputVpc getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.medialiveInput.MedialiveInputVpc">MedialiveInputVpc</a>

---



