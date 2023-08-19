# `aws_chimesdkvoice_global_settings`

Refer to the Terraform Registory for docs: [`aws_chimesdkvoice_global_settings`](https://registry.terraform.io/providers/hashicorp/aws/5.13.1/docs/resources/chimesdkvoice_global_settings).

# `chimesdkvoiceGlobalSettings` Submodule <a name="`chimesdkvoiceGlobalSettings` Submodule" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChimesdkvoiceGlobalSettings <a name="ChimesdkvoiceGlobalSettings" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.13.1/docs/resources/chimesdkvoice_global_settings aws_chimesdkvoice_global_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.Initializer"></a>

```typescript
import { chimesdkvoiceGlobalSettings } from '@cdktf/provider-aws'

new chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings(scope: Construct, id: string, config: ChimesdkvoiceGlobalSettingsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsConfig">ChimesdkvoiceGlobalSettingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsConfig">ChimesdkvoiceGlobalSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.putVoiceConnector">putVoiceConnector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putVoiceConnector` <a name="putVoiceConnector" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.putVoiceConnector"></a>

```typescript
public putVoiceConnector(value: ChimesdkvoiceGlobalSettingsVoiceConnector): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.putVoiceConnector.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnector">ChimesdkvoiceGlobalSettingsVoiceConnector</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.isConstruct"></a>

```typescript
import { chimesdkvoiceGlobalSettings } from '@cdktf/provider-aws'

chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.isTerraformElement"></a>

```typescript
import { chimesdkvoiceGlobalSettings } from '@cdktf/provider-aws'

chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.isTerraformResource"></a>

```typescript
import { chimesdkvoiceGlobalSettings } from '@cdktf/provider-aws'

chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.voiceConnector">voiceConnector</a></code> | <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference">ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.voiceConnectorInput">voiceConnectorInput</a></code> | <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnector">ChimesdkvoiceGlobalSettingsVoiceConnector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `voiceConnector`<sup>Required</sup> <a name="voiceConnector" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.voiceConnector"></a>

```typescript
public readonly voiceConnector: ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference">ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `voiceConnectorInput`<sup>Optional</sup> <a name="voiceConnectorInput" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.voiceConnectorInput"></a>

```typescript
public readonly voiceConnectorInput: ChimesdkvoiceGlobalSettingsVoiceConnector;
```

- *Type:* <a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnector">ChimesdkvoiceGlobalSettingsVoiceConnector</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ChimesdkvoiceGlobalSettingsConfig <a name="ChimesdkvoiceGlobalSettingsConfig" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsConfig.Initializer"></a>

```typescript
import { chimesdkvoiceGlobalSettings } from '@cdktf/provider-aws'

const chimesdkvoiceGlobalSettingsConfig: chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsConfig.property.voiceConnector">voiceConnector</a></code> | <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnector">ChimesdkvoiceGlobalSettingsVoiceConnector</a></code> | voice_connector block. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.13.1/docs/resources/chimesdkvoice_global_settings#id ChimesdkvoiceGlobalSettings#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `voiceConnector`<sup>Required</sup> <a name="voiceConnector" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsConfig.property.voiceConnector"></a>

```typescript
public readonly voiceConnector: ChimesdkvoiceGlobalSettingsVoiceConnector;
```

- *Type:* <a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnector">ChimesdkvoiceGlobalSettingsVoiceConnector</a>

voice_connector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.13.1/docs/resources/chimesdkvoice_global_settings#voice_connector ChimesdkvoiceGlobalSettings#voice_connector}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.13.1/docs/resources/chimesdkvoice_global_settings#id ChimesdkvoiceGlobalSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### ChimesdkvoiceGlobalSettingsVoiceConnector <a name="ChimesdkvoiceGlobalSettingsVoiceConnector" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnector.Initializer"></a>

```typescript
import { chimesdkvoiceGlobalSettings } from '@cdktf/provider-aws'

const chimesdkvoiceGlobalSettingsVoiceConnector: chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnector = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnector.property.cdrBucket">cdrBucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.13.1/docs/resources/chimesdkvoice_global_settings#cdr_bucket ChimesdkvoiceGlobalSettings#cdr_bucket}. |

---

##### `cdrBucket`<sup>Optional</sup> <a name="cdrBucket" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnector.property.cdrBucket"></a>

```typescript
public readonly cdrBucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.13.1/docs/resources/chimesdkvoice_global_settings#cdr_bucket ChimesdkvoiceGlobalSettings#cdr_bucket}.

---

## Classes <a name="Classes" id="Classes"></a>

### ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference <a name="ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.Initializer"></a>

```typescript
import { chimesdkvoiceGlobalSettings } from '@cdktf/provider-aws'

new chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.resetCdrBucket">resetCdrBucket</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCdrBucket` <a name="resetCdrBucket" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.resetCdrBucket"></a>

```typescript
public resetCdrBucket(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.property.cdrBucketInput">cdrBucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.property.cdrBucket">cdrBucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnector">ChimesdkvoiceGlobalSettingsVoiceConnector</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cdrBucketInput`<sup>Optional</sup> <a name="cdrBucketInput" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.property.cdrBucketInput"></a>

```typescript
public readonly cdrBucketInput: string;
```

- *Type:* string

---

##### `cdrBucket`<sup>Required</sup> <a name="cdrBucket" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.property.cdrBucket"></a>

```typescript
public readonly cdrBucket: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ChimesdkvoiceGlobalSettingsVoiceConnector;
```

- *Type:* <a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnector">ChimesdkvoiceGlobalSettingsVoiceConnector</a>

---



