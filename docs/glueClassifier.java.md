# `glueClassifier` Submodule <a name="`glueClassifier` Submodule" id="@cdktf/provider-aws.glueClassifier"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlueClassifier <a name="GlueClassifier" id="@cdktf/provider-aws.glueClassifier.GlueClassifier"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier aws_glue_classifier}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.glue_classifier.GlueClassifier;

GlueClassifier.Builder.create(Construct scope, java.lang.String id)
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
//  .csvClassifier(GlueClassifierCsvClassifier)
//  .grokClassifier(GlueClassifierGrokClassifier)
//  .id(java.lang.String)
//  .jsonClassifier(GlueClassifierJsonClassifier)
//  .xmlClassifier(GlueClassifierXmlClassifier)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#name GlueClassifier#name}. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.Initializer.parameter.csvClassifier">csvClassifier</a></code> | <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier">GlueClassifierCsvClassifier</a></code> | csv_classifier block. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.Initializer.parameter.grokClassifier">grokClassifier</a></code> | <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifier">GlueClassifierGrokClassifier</a></code> | grok_classifier block. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#id GlueClassifier#id}. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.Initializer.parameter.jsonClassifier">jsonClassifier</a></code> | <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifier">GlueClassifierJsonClassifier</a></code> | json_classifier block. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.Initializer.parameter.xmlClassifier">xmlClassifier</a></code> | <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifier">GlueClassifierXmlClassifier</a></code> | xml_classifier block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#name GlueClassifier#name}.

---

##### `csvClassifier`<sup>Optional</sup> <a name="csvClassifier" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.Initializer.parameter.csvClassifier"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier">GlueClassifierCsvClassifier</a>

csv_classifier block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#csv_classifier GlueClassifier#csv_classifier}

---

##### `grokClassifier`<sup>Optional</sup> <a name="grokClassifier" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.Initializer.parameter.grokClassifier"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifier">GlueClassifierGrokClassifier</a>

grok_classifier block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#grok_classifier GlueClassifier#grok_classifier}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#id GlueClassifier#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `jsonClassifier`<sup>Optional</sup> <a name="jsonClassifier" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.Initializer.parameter.jsonClassifier"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifier">GlueClassifierJsonClassifier</a>

json_classifier block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#json_classifier GlueClassifier#json_classifier}

---

##### `xmlClassifier`<sup>Optional</sup> <a name="xmlClassifier" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.Initializer.parameter.xmlClassifier"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifier">GlueClassifierXmlClassifier</a>

xml_classifier block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#xml_classifier GlueClassifier#xml_classifier}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.putCsvClassifier">putCsvClassifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.putGrokClassifier">putGrokClassifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.putJsonClassifier">putJsonClassifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.putXmlClassifier">putXmlClassifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.resetCsvClassifier">resetCsvClassifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.resetGrokClassifier">resetGrokClassifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.resetJsonClassifier">resetJsonClassifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.resetXmlClassifier">resetXmlClassifier</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putCsvClassifier` <a name="putCsvClassifier" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.putCsvClassifier"></a>

```java
public void putCsvClassifier(GlueClassifierCsvClassifier value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.putCsvClassifier.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier">GlueClassifierCsvClassifier</a>

---

##### `putGrokClassifier` <a name="putGrokClassifier" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.putGrokClassifier"></a>

```java
public void putGrokClassifier(GlueClassifierGrokClassifier value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.putGrokClassifier.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifier">GlueClassifierGrokClassifier</a>

---

##### `putJsonClassifier` <a name="putJsonClassifier" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.putJsonClassifier"></a>

```java
public void putJsonClassifier(GlueClassifierJsonClassifier value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.putJsonClassifier.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifier">GlueClassifierJsonClassifier</a>

---

##### `putXmlClassifier` <a name="putXmlClassifier" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.putXmlClassifier"></a>

```java
public void putXmlClassifier(GlueClassifierXmlClassifier value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.putXmlClassifier.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifier">GlueClassifierXmlClassifier</a>

---

##### `resetCsvClassifier` <a name="resetCsvClassifier" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.resetCsvClassifier"></a>

```java
public void resetCsvClassifier()
```

##### `resetGrokClassifier` <a name="resetGrokClassifier" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.resetGrokClassifier"></a>

```java
public void resetGrokClassifier()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.resetId"></a>

```java
public void resetId()
```

##### `resetJsonClassifier` <a name="resetJsonClassifier" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.resetJsonClassifier"></a>

```java
public void resetJsonClassifier()
```

##### `resetXmlClassifier` <a name="resetXmlClassifier" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.resetXmlClassifier"></a>

```java
public void resetXmlClassifier()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.glue_classifier.GlueClassifier;

GlueClassifier.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.glue_classifier.GlueClassifier;

GlueClassifier.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.glue_classifier.GlueClassifier;

GlueClassifier.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.csvClassifier">csvClassifier</a></code> | <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference">GlueClassifierCsvClassifierOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.grokClassifier">grokClassifier</a></code> | <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference">GlueClassifierGrokClassifierOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.jsonClassifier">jsonClassifier</a></code> | <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference">GlueClassifierJsonClassifierOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.xmlClassifier">xmlClassifier</a></code> | <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference">GlueClassifierXmlClassifierOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.csvClassifierInput">csvClassifierInput</a></code> | <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier">GlueClassifierCsvClassifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.grokClassifierInput">grokClassifierInput</a></code> | <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifier">GlueClassifierGrokClassifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.jsonClassifierInput">jsonClassifierInput</a></code> | <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifier">GlueClassifierJsonClassifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.xmlClassifierInput">xmlClassifierInput</a></code> | <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifier">GlueClassifierXmlClassifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `csvClassifier`<sup>Required</sup> <a name="csvClassifier" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.csvClassifier"></a>

```java
public GlueClassifierCsvClassifierOutputReference getCsvClassifier();
```

- *Type:* <a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference">GlueClassifierCsvClassifierOutputReference</a>

---

##### `grokClassifier`<sup>Required</sup> <a name="grokClassifier" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.grokClassifier"></a>

```java
public GlueClassifierGrokClassifierOutputReference getGrokClassifier();
```

- *Type:* <a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference">GlueClassifierGrokClassifierOutputReference</a>

---

##### `jsonClassifier`<sup>Required</sup> <a name="jsonClassifier" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.jsonClassifier"></a>

```java
public GlueClassifierJsonClassifierOutputReference getJsonClassifier();
```

- *Type:* <a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference">GlueClassifierJsonClassifierOutputReference</a>

---

##### `xmlClassifier`<sup>Required</sup> <a name="xmlClassifier" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.xmlClassifier"></a>

```java
public GlueClassifierXmlClassifierOutputReference getXmlClassifier();
```

- *Type:* <a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference">GlueClassifierXmlClassifierOutputReference</a>

---

##### `csvClassifierInput`<sup>Optional</sup> <a name="csvClassifierInput" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.csvClassifierInput"></a>

```java
public GlueClassifierCsvClassifier getCsvClassifierInput();
```

- *Type:* <a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier">GlueClassifierCsvClassifier</a>

---

##### `grokClassifierInput`<sup>Optional</sup> <a name="grokClassifierInput" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.grokClassifierInput"></a>

```java
public GlueClassifierGrokClassifier getGrokClassifierInput();
```

- *Type:* <a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifier">GlueClassifierGrokClassifier</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `jsonClassifierInput`<sup>Optional</sup> <a name="jsonClassifierInput" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.jsonClassifierInput"></a>

```java
public GlueClassifierJsonClassifier getJsonClassifierInput();
```

- *Type:* <a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifier">GlueClassifierJsonClassifier</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `xmlClassifierInput`<sup>Optional</sup> <a name="xmlClassifierInput" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.xmlClassifierInput"></a>

```java
public GlueClassifierXmlClassifier getXmlClassifierInput();
```

- *Type:* <a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifier">GlueClassifierXmlClassifier</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GlueClassifierConfig <a name="GlueClassifierConfig" id="@cdktf/provider-aws.glueClassifier.GlueClassifierConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.glue_classifier.GlueClassifierConfig;

GlueClassifierConfig.builder()
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
//  .csvClassifier(GlueClassifierCsvClassifier)
//  .grokClassifier(GlueClassifierGrokClassifier)
//  .id(java.lang.String)
//  .jsonClassifier(GlueClassifierJsonClassifier)
//  .xmlClassifier(GlueClassifierXmlClassifier)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#name GlueClassifier#name}. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.csvClassifier">csvClassifier</a></code> | <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier">GlueClassifierCsvClassifier</a></code> | csv_classifier block. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.grokClassifier">grokClassifier</a></code> | <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifier">GlueClassifierGrokClassifier</a></code> | grok_classifier block. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#id GlueClassifier#id}. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.jsonClassifier">jsonClassifier</a></code> | <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifier">GlueClassifierJsonClassifier</a></code> | json_classifier block. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.xmlClassifier">xmlClassifier</a></code> | <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifier">GlueClassifierXmlClassifier</a></code> | xml_classifier block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#name GlueClassifier#name}.

---

##### `csvClassifier`<sup>Optional</sup> <a name="csvClassifier" id="@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.csvClassifier"></a>

```java
public GlueClassifierCsvClassifier getCsvClassifier();
```

- *Type:* <a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier">GlueClassifierCsvClassifier</a>

csv_classifier block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#csv_classifier GlueClassifier#csv_classifier}

---

##### `grokClassifier`<sup>Optional</sup> <a name="grokClassifier" id="@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.grokClassifier"></a>

```java
public GlueClassifierGrokClassifier getGrokClassifier();
```

- *Type:* <a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifier">GlueClassifierGrokClassifier</a>

grok_classifier block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#grok_classifier GlueClassifier#grok_classifier}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#id GlueClassifier#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `jsonClassifier`<sup>Optional</sup> <a name="jsonClassifier" id="@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.jsonClassifier"></a>

```java
public GlueClassifierJsonClassifier getJsonClassifier();
```

- *Type:* <a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifier">GlueClassifierJsonClassifier</a>

json_classifier block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#json_classifier GlueClassifier#json_classifier}

---

##### `xmlClassifier`<sup>Optional</sup> <a name="xmlClassifier" id="@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.xmlClassifier"></a>

```java
public GlueClassifierXmlClassifier getXmlClassifier();
```

- *Type:* <a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifier">GlueClassifierXmlClassifier</a>

xml_classifier block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#xml_classifier GlueClassifier#xml_classifier}

---

### GlueClassifierCsvClassifier <a name="GlueClassifierCsvClassifier" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.glue_classifier.GlueClassifierCsvClassifier;

GlueClassifierCsvClassifier.builder()
//  .allowSingleColumn(java.lang.Boolean)
//  .allowSingleColumn(IResolvable)
//  .containsHeader(java.lang.String)
//  .customDatatypeConfigured(java.lang.Boolean)
//  .customDatatypeConfigured(IResolvable)
//  .customDatatypes(java.util.List<java.lang.String>)
//  .delimiter(java.lang.String)
//  .disableValueTrimming(java.lang.Boolean)
//  .disableValueTrimming(IResolvable)
//  .header(java.util.List<java.lang.String>)
//  .quoteSymbol(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier.property.allowSingleColumn">allowSingleColumn</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#allow_single_column GlueClassifier#allow_single_column}. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier.property.containsHeader">containsHeader</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#contains_header GlueClassifier#contains_header}. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier.property.customDatatypeConfigured">customDatatypeConfigured</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#custom_datatype_configured GlueClassifier#custom_datatype_configured}. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier.property.customDatatypes">customDatatypes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#custom_datatypes GlueClassifier#custom_datatypes}. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier.property.delimiter">delimiter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#delimiter GlueClassifier#delimiter}. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier.property.disableValueTrimming">disableValueTrimming</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#disable_value_trimming GlueClassifier#disable_value_trimming}. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier.property.header">header</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#header GlueClassifier#header}. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier.property.quoteSymbol">quoteSymbol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#quote_symbol GlueClassifier#quote_symbol}. |

---

##### `allowSingleColumn`<sup>Optional</sup> <a name="allowSingleColumn" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier.property.allowSingleColumn"></a>

```java
public java.lang.Object getAllowSingleColumn();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#allow_single_column GlueClassifier#allow_single_column}.

---

##### `containsHeader`<sup>Optional</sup> <a name="containsHeader" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier.property.containsHeader"></a>

```java
public java.lang.String getContainsHeader();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#contains_header GlueClassifier#contains_header}.

---

##### `customDatatypeConfigured`<sup>Optional</sup> <a name="customDatatypeConfigured" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier.property.customDatatypeConfigured"></a>

```java
public java.lang.Object getCustomDatatypeConfigured();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#custom_datatype_configured GlueClassifier#custom_datatype_configured}.

---

##### `customDatatypes`<sup>Optional</sup> <a name="customDatatypes" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier.property.customDatatypes"></a>

```java
public java.util.List<java.lang.String> getCustomDatatypes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#custom_datatypes GlueClassifier#custom_datatypes}.

---

##### `delimiter`<sup>Optional</sup> <a name="delimiter" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier.property.delimiter"></a>

```java
public java.lang.String getDelimiter();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#delimiter GlueClassifier#delimiter}.

---

##### `disableValueTrimming`<sup>Optional</sup> <a name="disableValueTrimming" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier.property.disableValueTrimming"></a>

```java
public java.lang.Object getDisableValueTrimming();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#disable_value_trimming GlueClassifier#disable_value_trimming}.

---

##### `header`<sup>Optional</sup> <a name="header" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier.property.header"></a>

```java
public java.util.List<java.lang.String> getHeader();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#header GlueClassifier#header}.

---

##### `quoteSymbol`<sup>Optional</sup> <a name="quoteSymbol" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier.property.quoteSymbol"></a>

```java
public java.lang.String getQuoteSymbol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#quote_symbol GlueClassifier#quote_symbol}.

---

### GlueClassifierGrokClassifier <a name="GlueClassifierGrokClassifier" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifier"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifier.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.glue_classifier.GlueClassifierGrokClassifier;

GlueClassifierGrokClassifier.builder()
    .classification(java.lang.String)
    .grokPattern(java.lang.String)
//  .customPatterns(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifier.property.classification">classification</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#classification GlueClassifier#classification}. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifier.property.grokPattern">grokPattern</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#grok_pattern GlueClassifier#grok_pattern}. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifier.property.customPatterns">customPatterns</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#custom_patterns GlueClassifier#custom_patterns}. |

---

##### `classification`<sup>Required</sup> <a name="classification" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifier.property.classification"></a>

```java
public java.lang.String getClassification();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#classification GlueClassifier#classification}.

---

##### `grokPattern`<sup>Required</sup> <a name="grokPattern" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifier.property.grokPattern"></a>

```java
public java.lang.String getGrokPattern();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#grok_pattern GlueClassifier#grok_pattern}.

---

##### `customPatterns`<sup>Optional</sup> <a name="customPatterns" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifier.property.customPatterns"></a>

```java
public java.lang.String getCustomPatterns();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#custom_patterns GlueClassifier#custom_patterns}.

---

### GlueClassifierJsonClassifier <a name="GlueClassifierJsonClassifier" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifier"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifier.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.glue_classifier.GlueClassifierJsonClassifier;

GlueClassifierJsonClassifier.builder()
    .jsonPath(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifier.property.jsonPath">jsonPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#json_path GlueClassifier#json_path}. |

---

##### `jsonPath`<sup>Required</sup> <a name="jsonPath" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifier.property.jsonPath"></a>

```java
public java.lang.String getJsonPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#json_path GlueClassifier#json_path}.

---

### GlueClassifierXmlClassifier <a name="GlueClassifierXmlClassifier" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifier"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifier.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.glue_classifier.GlueClassifierXmlClassifier;

GlueClassifierXmlClassifier.builder()
    .classification(java.lang.String)
    .rowTag(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifier.property.classification">classification</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#classification GlueClassifier#classification}. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifier.property.rowTag">rowTag</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#row_tag GlueClassifier#row_tag}. |

---

##### `classification`<sup>Required</sup> <a name="classification" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifier.property.classification"></a>

```java
public java.lang.String getClassification();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#classification GlueClassifier#classification}.

---

##### `rowTag`<sup>Required</sup> <a name="rowTag" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifier.property.rowTag"></a>

```java
public java.lang.String getRowTag();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#row_tag GlueClassifier#row_tag}.

---

## Classes <a name="Classes" id="Classes"></a>

### GlueClassifierCsvClassifierOutputReference <a name="GlueClassifierCsvClassifierOutputReference" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.glue_classifier.GlueClassifierCsvClassifierOutputReference;

new GlueClassifierCsvClassifierOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetAllowSingleColumn">resetAllowSingleColumn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetContainsHeader">resetContainsHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetCustomDatatypeConfigured">resetCustomDatatypeConfigured</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetCustomDatatypes">resetCustomDatatypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetDelimiter">resetDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetDisableValueTrimming">resetDisableValueTrimming</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetHeader">resetHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetQuoteSymbol">resetQuoteSymbol</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowSingleColumn` <a name="resetAllowSingleColumn" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetAllowSingleColumn"></a>

```java
public void resetAllowSingleColumn()
```

##### `resetContainsHeader` <a name="resetContainsHeader" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetContainsHeader"></a>

```java
public void resetContainsHeader()
```

##### `resetCustomDatatypeConfigured` <a name="resetCustomDatatypeConfigured" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetCustomDatatypeConfigured"></a>

```java
public void resetCustomDatatypeConfigured()
```

##### `resetCustomDatatypes` <a name="resetCustomDatatypes" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetCustomDatatypes"></a>

```java
public void resetCustomDatatypes()
```

##### `resetDelimiter` <a name="resetDelimiter" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetDelimiter"></a>

```java
public void resetDelimiter()
```

##### `resetDisableValueTrimming` <a name="resetDisableValueTrimming" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetDisableValueTrimming"></a>

```java
public void resetDisableValueTrimming()
```

##### `resetHeader` <a name="resetHeader" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetHeader"></a>

```java
public void resetHeader()
```

##### `resetQuoteSymbol` <a name="resetQuoteSymbol" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetQuoteSymbol"></a>

```java
public void resetQuoteSymbol()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.allowSingleColumnInput">allowSingleColumnInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.containsHeaderInput">containsHeaderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.customDatatypeConfiguredInput">customDatatypeConfiguredInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.customDatatypesInput">customDatatypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.delimiterInput">delimiterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.disableValueTrimmingInput">disableValueTrimmingInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.headerInput">headerInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.quoteSymbolInput">quoteSymbolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.allowSingleColumn">allowSingleColumn</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.containsHeader">containsHeader</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.customDatatypeConfigured">customDatatypeConfigured</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.customDatatypes">customDatatypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.delimiter">delimiter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.disableValueTrimming">disableValueTrimming</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.header">header</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.quoteSymbol">quoteSymbol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier">GlueClassifierCsvClassifier</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowSingleColumnInput`<sup>Optional</sup> <a name="allowSingleColumnInput" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.allowSingleColumnInput"></a>

```java
public java.lang.Object getAllowSingleColumnInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `containsHeaderInput`<sup>Optional</sup> <a name="containsHeaderInput" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.containsHeaderInput"></a>

```java
public java.lang.String getContainsHeaderInput();
```

- *Type:* java.lang.String

---

##### `customDatatypeConfiguredInput`<sup>Optional</sup> <a name="customDatatypeConfiguredInput" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.customDatatypeConfiguredInput"></a>

```java
public java.lang.Object getCustomDatatypeConfiguredInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `customDatatypesInput`<sup>Optional</sup> <a name="customDatatypesInput" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.customDatatypesInput"></a>

```java
public java.util.List<java.lang.String> getCustomDatatypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `delimiterInput`<sup>Optional</sup> <a name="delimiterInput" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.delimiterInput"></a>

```java
public java.lang.String getDelimiterInput();
```

- *Type:* java.lang.String

---

##### `disableValueTrimmingInput`<sup>Optional</sup> <a name="disableValueTrimmingInput" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.disableValueTrimmingInput"></a>

```java
public java.lang.Object getDisableValueTrimmingInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `headerInput`<sup>Optional</sup> <a name="headerInput" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.headerInput"></a>

```java
public java.util.List<java.lang.String> getHeaderInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `quoteSymbolInput`<sup>Optional</sup> <a name="quoteSymbolInput" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.quoteSymbolInput"></a>

```java
public java.lang.String getQuoteSymbolInput();
```

- *Type:* java.lang.String

---

##### `allowSingleColumn`<sup>Required</sup> <a name="allowSingleColumn" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.allowSingleColumn"></a>

```java
public java.lang.Object getAllowSingleColumn();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `containsHeader`<sup>Required</sup> <a name="containsHeader" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.containsHeader"></a>

```java
public java.lang.String getContainsHeader();
```

- *Type:* java.lang.String

---

##### `customDatatypeConfigured`<sup>Required</sup> <a name="customDatatypeConfigured" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.customDatatypeConfigured"></a>

```java
public java.lang.Object getCustomDatatypeConfigured();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `customDatatypes`<sup>Required</sup> <a name="customDatatypes" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.customDatatypes"></a>

```java
public java.util.List<java.lang.String> getCustomDatatypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `delimiter`<sup>Required</sup> <a name="delimiter" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.delimiter"></a>

```java
public java.lang.String getDelimiter();
```

- *Type:* java.lang.String

---

##### `disableValueTrimming`<sup>Required</sup> <a name="disableValueTrimming" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.disableValueTrimming"></a>

```java
public java.lang.Object getDisableValueTrimming();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.header"></a>

```java
public java.util.List<java.lang.String> getHeader();
```

- *Type:* java.util.List<java.lang.String>

---

##### `quoteSymbol`<sup>Required</sup> <a name="quoteSymbol" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.quoteSymbol"></a>

```java
public java.lang.String getQuoteSymbol();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.internalValue"></a>

```java
public GlueClassifierCsvClassifier getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier">GlueClassifierCsvClassifier</a>

---


### GlueClassifierGrokClassifierOutputReference <a name="GlueClassifierGrokClassifierOutputReference" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.glue_classifier.GlueClassifierGrokClassifierOutputReference;

new GlueClassifierGrokClassifierOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.resetCustomPatterns">resetCustomPatterns</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCustomPatterns` <a name="resetCustomPatterns" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.resetCustomPatterns"></a>

```java
public void resetCustomPatterns()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.classificationInput">classificationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.customPatternsInput">customPatternsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.grokPatternInput">grokPatternInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.classification">classification</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.customPatterns">customPatterns</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.grokPattern">grokPattern</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifier">GlueClassifierGrokClassifier</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `classificationInput`<sup>Optional</sup> <a name="classificationInput" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.classificationInput"></a>

```java
public java.lang.String getClassificationInput();
```

- *Type:* java.lang.String

---

##### `customPatternsInput`<sup>Optional</sup> <a name="customPatternsInput" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.customPatternsInput"></a>

```java
public java.lang.String getCustomPatternsInput();
```

- *Type:* java.lang.String

---

##### `grokPatternInput`<sup>Optional</sup> <a name="grokPatternInput" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.grokPatternInput"></a>

```java
public java.lang.String getGrokPatternInput();
```

- *Type:* java.lang.String

---

##### `classification`<sup>Required</sup> <a name="classification" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.classification"></a>

```java
public java.lang.String getClassification();
```

- *Type:* java.lang.String

---

##### `customPatterns`<sup>Required</sup> <a name="customPatterns" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.customPatterns"></a>

```java
public java.lang.String getCustomPatterns();
```

- *Type:* java.lang.String

---

##### `grokPattern`<sup>Required</sup> <a name="grokPattern" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.grokPattern"></a>

```java
public java.lang.String getGrokPattern();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.internalValue"></a>

```java
public GlueClassifierGrokClassifier getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifier">GlueClassifierGrokClassifier</a>

---


### GlueClassifierJsonClassifierOutputReference <a name="GlueClassifierJsonClassifierOutputReference" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.glue_classifier.GlueClassifierJsonClassifierOutputReference;

new GlueClassifierJsonClassifierOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.property.jsonPathInput">jsonPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.property.jsonPath">jsonPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifier">GlueClassifierJsonClassifier</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `jsonPathInput`<sup>Optional</sup> <a name="jsonPathInput" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.property.jsonPathInput"></a>

```java
public java.lang.String getJsonPathInput();
```

- *Type:* java.lang.String

---

##### `jsonPath`<sup>Required</sup> <a name="jsonPath" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.property.jsonPath"></a>

```java
public java.lang.String getJsonPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.property.internalValue"></a>

```java
public GlueClassifierJsonClassifier getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifier">GlueClassifierJsonClassifier</a>

---


### GlueClassifierXmlClassifierOutputReference <a name="GlueClassifierXmlClassifierOutputReference" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.glue_classifier.GlueClassifierXmlClassifierOutputReference;

new GlueClassifierXmlClassifierOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.classificationInput">classificationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.rowTagInput">rowTagInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.classification">classification</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.rowTag">rowTag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifier">GlueClassifierXmlClassifier</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `classificationInput`<sup>Optional</sup> <a name="classificationInput" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.classificationInput"></a>

```java
public java.lang.String getClassificationInput();
```

- *Type:* java.lang.String

---

##### `rowTagInput`<sup>Optional</sup> <a name="rowTagInput" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.rowTagInput"></a>

```java
public java.lang.String getRowTagInput();
```

- *Type:* java.lang.String

---

##### `classification`<sup>Required</sup> <a name="classification" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.classification"></a>

```java
public java.lang.String getClassification();
```

- *Type:* java.lang.String

---

##### `rowTag`<sup>Required</sup> <a name="rowTag" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.rowTag"></a>

```java
public java.lang.String getRowTag();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.internalValue"></a>

```java
public GlueClassifierXmlClassifier getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifier">GlueClassifierXmlClassifier</a>

---



