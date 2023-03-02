# `chimeVoiceConnectorTerminationCredentials` Submodule <a name="`chimeVoiceConnectorTerminationCredentials` Submodule" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChimeVoiceConnectorTerminationCredentials <a name="ChimeVoiceConnectorTerminationCredentials" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination_credentials aws_chime_voice_connector_termination_credentials}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.chime_voice_connector_termination_credentials.ChimeVoiceConnectorTerminationCredentials;

ChimeVoiceConnectorTerminationCredentials.Builder.create(Construct scope, java.lang.String id)
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
    .credentials(IResolvable)
    .credentials(java.util.List<ChimeVoiceConnectorTerminationCredentialsCredentials>)
    .voiceConnectorId(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.Initializer.parameter.credentials">credentials</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentials">ChimeVoiceConnectorTerminationCredentialsCredentials</a>></code> | credentials block. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.Initializer.parameter.voiceConnectorId">voiceConnectorId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination_credentials#voice_connector_id ChimeVoiceConnectorTerminationCredentials#voice_connector_id}. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination_credentials#id ChimeVoiceConnectorTerminationCredentials#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.Initializer.parameter.credentials"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentials">ChimeVoiceConnectorTerminationCredentialsCredentials</a>>

credentials block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination_credentials#credentials ChimeVoiceConnectorTerminationCredentials#credentials}

---

##### `voiceConnectorId`<sup>Required</sup> <a name="voiceConnectorId" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.Initializer.parameter.voiceConnectorId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination_credentials#voice_connector_id ChimeVoiceConnectorTerminationCredentials#voice_connector_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination_credentials#id ChimeVoiceConnectorTerminationCredentials#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.putCredentials">putCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putCredentials` <a name="putCredentials" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.putCredentials"></a>

```java
public void putCredentials(IResolvable OR java.util.List<ChimeVoiceConnectorTerminationCredentialsCredentials> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.putCredentials.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentials">ChimeVoiceConnectorTerminationCredentialsCredentials</a>>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.chime_voice_connector_termination_credentials.ChimeVoiceConnectorTerminationCredentials;

ChimeVoiceConnectorTerminationCredentials.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.chime_voice_connector_termination_credentials.ChimeVoiceConnectorTerminationCredentials;

ChimeVoiceConnectorTerminationCredentials.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.chime_voice_connector_termination_credentials.ChimeVoiceConnectorTerminationCredentials;

ChimeVoiceConnectorTerminationCredentials.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.credentials">credentials</a></code> | <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsList">ChimeVoiceConnectorTerminationCredentialsCredentialsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.credentialsInput">credentialsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentials">ChimeVoiceConnectorTerminationCredentialsCredentials</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.voiceConnectorIdInput">voiceConnectorIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.voiceConnectorId">voiceConnectorId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.credentials"></a>

```java
public ChimeVoiceConnectorTerminationCredentialsCredentialsList getCredentials();
```

- *Type:* <a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsList">ChimeVoiceConnectorTerminationCredentialsCredentialsList</a>

---

##### `credentialsInput`<sup>Optional</sup> <a name="credentialsInput" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.credentialsInput"></a>

```java
public java.lang.Object getCredentialsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentials">ChimeVoiceConnectorTerminationCredentialsCredentials</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `voiceConnectorIdInput`<sup>Optional</sup> <a name="voiceConnectorIdInput" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.voiceConnectorIdInput"></a>

```java
public java.lang.String getVoiceConnectorIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `voiceConnectorId`<sup>Required</sup> <a name="voiceConnectorId" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.voiceConnectorId"></a>

```java
public java.lang.String getVoiceConnectorId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ChimeVoiceConnectorTerminationCredentialsConfig <a name="ChimeVoiceConnectorTerminationCredentialsConfig" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.chime_voice_connector_termination_credentials.ChimeVoiceConnectorTerminationCredentialsConfig;

ChimeVoiceConnectorTerminationCredentialsConfig.builder()
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
    .credentials(IResolvable)
    .credentials(java.util.List<ChimeVoiceConnectorTerminationCredentialsCredentials>)
    .voiceConnectorId(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsConfig.property.credentials">credentials</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentials">ChimeVoiceConnectorTerminationCredentialsCredentials</a>></code> | credentials block. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsConfig.property.voiceConnectorId">voiceConnectorId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination_credentials#voice_connector_id ChimeVoiceConnectorTerminationCredentials#voice_connector_id}. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination_credentials#id ChimeVoiceConnectorTerminationCredentials#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsConfig.property.credentials"></a>

```java
public java.lang.Object getCredentials();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentials">ChimeVoiceConnectorTerminationCredentialsCredentials</a>>

credentials block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination_credentials#credentials ChimeVoiceConnectorTerminationCredentials#credentials}

---

##### `voiceConnectorId`<sup>Required</sup> <a name="voiceConnectorId" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsConfig.property.voiceConnectorId"></a>

```java
public java.lang.String getVoiceConnectorId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination_credentials#voice_connector_id ChimeVoiceConnectorTerminationCredentials#voice_connector_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination_credentials#id ChimeVoiceConnectorTerminationCredentials#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### ChimeVoiceConnectorTerminationCredentialsCredentials <a name="ChimeVoiceConnectorTerminationCredentialsCredentials" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentials.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.chime_voice_connector_termination_credentials.ChimeVoiceConnectorTerminationCredentialsCredentials;

ChimeVoiceConnectorTerminationCredentialsCredentials.builder()
    .password(java.lang.String)
    .username(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentials.property.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination_credentials#password ChimeVoiceConnectorTerminationCredentials#password}. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentials.property.username">username</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination_credentials#username ChimeVoiceConnectorTerminationCredentials#username}. |

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentials.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination_credentials#password ChimeVoiceConnectorTerminationCredentials#password}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentials.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination_credentials#username ChimeVoiceConnectorTerminationCredentials#username}.

---

## Classes <a name="Classes" id="Classes"></a>

### ChimeVoiceConnectorTerminationCredentialsCredentialsList <a name="ChimeVoiceConnectorTerminationCredentialsCredentialsList" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.chime_voice_connector_termination_credentials.ChimeVoiceConnectorTerminationCredentialsCredentialsList;

new ChimeVoiceConnectorTerminationCredentialsCredentialsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsList.get"></a>

```java
public ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentials">ChimeVoiceConnectorTerminationCredentialsCredentials</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentials">ChimeVoiceConnectorTerminationCredentialsCredentials</a>>

---


### ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference <a name="ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.chime_voice_connector_termination_credentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference;

new ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentials">ChimeVoiceConnectorTerminationCredentialsCredentials</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentials">ChimeVoiceConnectorTerminationCredentialsCredentials</a> OR com.hashicorp.cdktf.IResolvable

---



