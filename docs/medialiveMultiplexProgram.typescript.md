# `medialiveMultiplexProgram` Submodule <a name="`medialiveMultiplexProgram` Submodule" id="@cdktf/provider-aws.medialiveMultiplexProgram"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MedialiveMultiplexProgram <a name="MedialiveMultiplexProgram" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex_program aws_medialive_multiplex_program}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.Initializer"></a>

```typescript
import { medialiveMultiplexProgram } from '@cdktf/provider-aws'

new medialiveMultiplexProgram.MedialiveMultiplexProgram(scope: Construct, id: string, config: MedialiveMultiplexProgramConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramConfig">MedialiveMultiplexProgramConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramConfig">MedialiveMultiplexProgramConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.putMultiplexProgramSettings">putMultiplexProgramSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.resetMultiplexProgramSettings">resetMultiplexProgramSettings</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putMultiplexProgramSettings` <a name="putMultiplexProgramSettings" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.putMultiplexProgramSettings"></a>

```typescript
public putMultiplexProgramSettings(value: IResolvable | MedialiveMultiplexProgramMultiplexProgramSettings[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.putMultiplexProgramSettings.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettings">MedialiveMultiplexProgramMultiplexProgramSettings</a>[]

---

##### `resetMultiplexProgramSettings` <a name="resetMultiplexProgramSettings" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.resetMultiplexProgramSettings"></a>

```typescript
public resetMultiplexProgramSettings(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.isConstruct"></a>

```typescript
import { medialiveMultiplexProgram } from '@cdktf/provider-aws'

medialiveMultiplexProgram.MedialiveMultiplexProgram.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.isTerraformElement"></a>

```typescript
import { medialiveMultiplexProgram } from '@cdktf/provider-aws'

medialiveMultiplexProgram.MedialiveMultiplexProgram.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.isTerraformResource"></a>

```typescript
import { medialiveMultiplexProgram } from '@cdktf/provider-aws'

medialiveMultiplexProgram.MedialiveMultiplexProgram.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.multiplexProgramSettings">multiplexProgramSettings</a></code> | <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsList">MedialiveMultiplexProgramMultiplexProgramSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.multiplexIdInput">multiplexIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.multiplexProgramSettingsInput">multiplexProgramSettingsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettings">MedialiveMultiplexProgramMultiplexProgramSettings</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.programNameInput">programNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.multiplexId">multiplexId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.programName">programName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `multiplexProgramSettings`<sup>Required</sup> <a name="multiplexProgramSettings" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.multiplexProgramSettings"></a>

```typescript
public readonly multiplexProgramSettings: MedialiveMultiplexProgramMultiplexProgramSettingsList;
```

- *Type:* <a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsList">MedialiveMultiplexProgramMultiplexProgramSettingsList</a>

---

##### `multiplexIdInput`<sup>Optional</sup> <a name="multiplexIdInput" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.multiplexIdInput"></a>

```typescript
public readonly multiplexIdInput: string;
```

- *Type:* string

---

##### `multiplexProgramSettingsInput`<sup>Optional</sup> <a name="multiplexProgramSettingsInput" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.multiplexProgramSettingsInput"></a>

```typescript
public readonly multiplexProgramSettingsInput: IResolvable | MedialiveMultiplexProgramMultiplexProgramSettings[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettings">MedialiveMultiplexProgramMultiplexProgramSettings</a>[]

---

##### `programNameInput`<sup>Optional</sup> <a name="programNameInput" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.programNameInput"></a>

```typescript
public readonly programNameInput: string;
```

- *Type:* string

---

##### `multiplexId`<sup>Required</sup> <a name="multiplexId" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.multiplexId"></a>

```typescript
public readonly multiplexId: string;
```

- *Type:* string

---

##### `programName`<sup>Required</sup> <a name="programName" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.programName"></a>

```typescript
public readonly programName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgram.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MedialiveMultiplexProgramConfig <a name="MedialiveMultiplexProgramConfig" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramConfig.Initializer"></a>

```typescript
import { medialiveMultiplexProgram } from '@cdktf/provider-aws'

const medialiveMultiplexProgramConfig: medialiveMultiplexProgram.MedialiveMultiplexProgramConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramConfig.property.multiplexId">multiplexId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex_program#multiplex_id MedialiveMultiplexProgram#multiplex_id}. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramConfig.property.programName">programName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex_program#program_name MedialiveMultiplexProgram#program_name}. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramConfig.property.multiplexProgramSettings">multiplexProgramSettings</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettings">MedialiveMultiplexProgramMultiplexProgramSettings</a>[]</code> | multiplex_program_settings block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `multiplexId`<sup>Required</sup> <a name="multiplexId" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramConfig.property.multiplexId"></a>

```typescript
public readonly multiplexId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex_program#multiplex_id MedialiveMultiplexProgram#multiplex_id}.

---

##### `programName`<sup>Required</sup> <a name="programName" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramConfig.property.programName"></a>

```typescript
public readonly programName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex_program#program_name MedialiveMultiplexProgram#program_name}.

---

##### `multiplexProgramSettings`<sup>Optional</sup> <a name="multiplexProgramSettings" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramConfig.property.multiplexProgramSettings"></a>

```typescript
public readonly multiplexProgramSettings: IResolvable | MedialiveMultiplexProgramMultiplexProgramSettings[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettings">MedialiveMultiplexProgramMultiplexProgramSettings</a>[]

multiplex_program_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex_program#multiplex_program_settings MedialiveMultiplexProgram#multiplex_program_settings}

---

### MedialiveMultiplexProgramMultiplexProgramSettings <a name="MedialiveMultiplexProgramMultiplexProgramSettings" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettings.Initializer"></a>

```typescript
import { medialiveMultiplexProgram } from '@cdktf/provider-aws'

const medialiveMultiplexProgramMultiplexProgramSettings: medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettings.property.preferredChannelPipeline">preferredChannelPipeline</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex_program#preferred_channel_pipeline MedialiveMultiplexProgram#preferred_channel_pipeline}. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettings.property.programNumber">programNumber</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex_program#program_number MedialiveMultiplexProgram#program_number}. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettings.property.serviceDescriptor">serviceDescriptor</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptor">MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptor</a>[]</code> | service_descriptor block. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettings.property.videoSettings">videoSettings</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettings">MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettings</a>[]</code> | video_settings block. |

---

##### `preferredChannelPipeline`<sup>Required</sup> <a name="preferredChannelPipeline" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettings.property.preferredChannelPipeline"></a>

```typescript
public readonly preferredChannelPipeline: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex_program#preferred_channel_pipeline MedialiveMultiplexProgram#preferred_channel_pipeline}.

---

##### `programNumber`<sup>Required</sup> <a name="programNumber" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettings.property.programNumber"></a>

```typescript
public readonly programNumber: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex_program#program_number MedialiveMultiplexProgram#program_number}.

---

##### `serviceDescriptor`<sup>Optional</sup> <a name="serviceDescriptor" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettings.property.serviceDescriptor"></a>

```typescript
public readonly serviceDescriptor: IResolvable | MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptor[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptor">MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptor</a>[]

service_descriptor block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex_program#service_descriptor MedialiveMultiplexProgram#service_descriptor}

---

##### `videoSettings`<sup>Optional</sup> <a name="videoSettings" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettings.property.videoSettings"></a>

```typescript
public readonly videoSettings: IResolvable | MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettings[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettings">MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettings</a>[]

video_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex_program#video_settings MedialiveMultiplexProgram#video_settings}

---

### MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptor <a name="MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptor" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptor"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptor.Initializer"></a>

```typescript
import { medialiveMultiplexProgram } from '@cdktf/provider-aws'

const medialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptor: medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptor = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptor.property.providerName">providerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex_program#provider_name MedialiveMultiplexProgram#provider_name}. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptor.property.serviceName">serviceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex_program#service_name MedialiveMultiplexProgram#service_name}. |

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptor.property.providerName"></a>

```typescript
public readonly providerName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex_program#provider_name MedialiveMultiplexProgram#provider_name}.

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptor.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex_program#service_name MedialiveMultiplexProgram#service_name}.

---

### MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettings <a name="MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettings" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettings.Initializer"></a>

```typescript
import { medialiveMultiplexProgram } from '@cdktf/provider-aws'

const medialiveMultiplexProgramMultiplexProgramSettingsVideoSettings: medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettings.property.constantBitrate">constantBitrate</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex_program#constant_bitrate MedialiveMultiplexProgram#constant_bitrate}. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettings.property.statemuxSettings">statemuxSettings</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettings">MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettings</a>[]</code> | statemux_settings block. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettings.property.statmuxSettings">statmuxSettings</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings">MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings</a>[]</code> | statmux_settings block. |

---

##### `constantBitrate`<sup>Optional</sup> <a name="constantBitrate" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettings.property.constantBitrate"></a>

```typescript
public readonly constantBitrate: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex_program#constant_bitrate MedialiveMultiplexProgram#constant_bitrate}.

---

##### `statemuxSettings`<sup>Optional</sup> <a name="statemuxSettings" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettings.property.statemuxSettings"></a>

```typescript
public readonly statemuxSettings: IResolvable | MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettings[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettings">MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettings</a>[]

statemux_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex_program#statemux_settings MedialiveMultiplexProgram#statemux_settings}

---

##### `statmuxSettings`<sup>Optional</sup> <a name="statmuxSettings" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettings.property.statmuxSettings"></a>

```typescript
public readonly statmuxSettings: IResolvable | MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings">MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings</a>[]

statmux_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex_program#statmux_settings MedialiveMultiplexProgram#statmux_settings}

---

### MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettings <a name="MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettings" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettings.Initializer"></a>

```typescript
import { medialiveMultiplexProgram } from '@cdktf/provider-aws'

const medialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettings: medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettings.property.maximumBitrate">maximumBitrate</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex_program#maximum_bitrate MedialiveMultiplexProgram#maximum_bitrate}. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettings.property.minimumBitrate">minimumBitrate</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex_program#minimum_bitrate MedialiveMultiplexProgram#minimum_bitrate}. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettings.property.priority">priority</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex_program#priority MedialiveMultiplexProgram#priority}. |

---

##### `maximumBitrate`<sup>Optional</sup> <a name="maximumBitrate" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettings.property.maximumBitrate"></a>

```typescript
public readonly maximumBitrate: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex_program#maximum_bitrate MedialiveMultiplexProgram#maximum_bitrate}.

---

##### `minimumBitrate`<sup>Optional</sup> <a name="minimumBitrate" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettings.property.minimumBitrate"></a>

```typescript
public readonly minimumBitrate: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex_program#minimum_bitrate MedialiveMultiplexProgram#minimum_bitrate}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettings.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex_program#priority MedialiveMultiplexProgram#priority}.

---

### MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings <a name="MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings.Initializer"></a>

```typescript
import { medialiveMultiplexProgram } from '@cdktf/provider-aws'

const medialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings: medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings.property.maximumBitrate">maximumBitrate</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex_program#maximum_bitrate MedialiveMultiplexProgram#maximum_bitrate}. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings.property.minimumBitrate">minimumBitrate</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex_program#minimum_bitrate MedialiveMultiplexProgram#minimum_bitrate}. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings.property.priority">priority</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex_program#priority MedialiveMultiplexProgram#priority}. |

---

##### `maximumBitrate`<sup>Optional</sup> <a name="maximumBitrate" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings.property.maximumBitrate"></a>

```typescript
public readonly maximumBitrate: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex_program#maximum_bitrate MedialiveMultiplexProgram#maximum_bitrate}.

---

##### `minimumBitrate`<sup>Optional</sup> <a name="minimumBitrate" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings.property.minimumBitrate"></a>

```typescript
public readonly minimumBitrate: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex_program#minimum_bitrate MedialiveMultiplexProgram#minimum_bitrate}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_multiplex_program#priority MedialiveMultiplexProgram#priority}.

---

## Classes <a name="Classes" id="Classes"></a>

### MedialiveMultiplexProgramMultiplexProgramSettingsList <a name="MedialiveMultiplexProgramMultiplexProgramSettingsList" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsList.Initializer"></a>

```typescript
import { medialiveMultiplexProgram } from '@cdktf/provider-aws'

new medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsList.get"></a>

```typescript
public get(index: number): MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettings">MedialiveMultiplexProgramMultiplexProgramSettings</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MedialiveMultiplexProgramMultiplexProgramSettings[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettings">MedialiveMultiplexProgramMultiplexProgramSettings</a>[]

---


### MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference <a name="MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.Initializer"></a>

```typescript
import { medialiveMultiplexProgram } from '@cdktf/provider-aws'

new medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.putServiceDescriptor">putServiceDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.putVideoSettings">putVideoSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.resetServiceDescriptor">resetServiceDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.resetVideoSettings">resetVideoSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putServiceDescriptor` <a name="putServiceDescriptor" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.putServiceDescriptor"></a>

```typescript
public putServiceDescriptor(value: IResolvable | MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptor[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.putServiceDescriptor.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptor">MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptor</a>[]

---

##### `putVideoSettings` <a name="putVideoSettings" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.putVideoSettings"></a>

```typescript
public putVideoSettings(value: IResolvable | MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettings[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.putVideoSettings.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettings">MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettings</a>[]

---

##### `resetServiceDescriptor` <a name="resetServiceDescriptor" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.resetServiceDescriptor"></a>

```typescript
public resetServiceDescriptor(): void
```

##### `resetVideoSettings` <a name="resetVideoSettings" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.resetVideoSettings"></a>

```typescript
public resetVideoSettings(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.property.serviceDescriptor">serviceDescriptor</a></code> | <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorList">MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.property.videoSettings">videoSettings</a></code> | <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsList">MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.property.preferredChannelPipelineInput">preferredChannelPipelineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.property.programNumberInput">programNumberInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.property.serviceDescriptorInput">serviceDescriptorInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptor">MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptor</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.property.videoSettingsInput">videoSettingsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettings">MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettings</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.property.preferredChannelPipeline">preferredChannelPipeline</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.property.programNumber">programNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettings">MedialiveMultiplexProgramMultiplexProgramSettings</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `serviceDescriptor`<sup>Required</sup> <a name="serviceDescriptor" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.property.serviceDescriptor"></a>

```typescript
public readonly serviceDescriptor: MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorList;
```

- *Type:* <a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorList">MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorList</a>

---

##### `videoSettings`<sup>Required</sup> <a name="videoSettings" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.property.videoSettings"></a>

```typescript
public readonly videoSettings: MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsList;
```

- *Type:* <a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsList">MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsList</a>

---

##### `preferredChannelPipelineInput`<sup>Optional</sup> <a name="preferredChannelPipelineInput" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.property.preferredChannelPipelineInput"></a>

```typescript
public readonly preferredChannelPipelineInput: string;
```

- *Type:* string

---

##### `programNumberInput`<sup>Optional</sup> <a name="programNumberInput" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.property.programNumberInput"></a>

```typescript
public readonly programNumberInput: number;
```

- *Type:* number

---

##### `serviceDescriptorInput`<sup>Optional</sup> <a name="serviceDescriptorInput" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.property.serviceDescriptorInput"></a>

```typescript
public readonly serviceDescriptorInput: IResolvable | MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptor[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptor">MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptor</a>[]

---

##### `videoSettingsInput`<sup>Optional</sup> <a name="videoSettingsInput" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.property.videoSettingsInput"></a>

```typescript
public readonly videoSettingsInput: IResolvable | MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettings[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettings">MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettings</a>[]

---

##### `preferredChannelPipeline`<sup>Required</sup> <a name="preferredChannelPipeline" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.property.preferredChannelPipeline"></a>

```typescript
public readonly preferredChannelPipeline: string;
```

- *Type:* string

---

##### `programNumber`<sup>Required</sup> <a name="programNumber" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.property.programNumber"></a>

```typescript
public readonly programNumber: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MedialiveMultiplexProgramMultiplexProgramSettings | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettings">MedialiveMultiplexProgramMultiplexProgramSettings</a> | cdktf.IResolvable

---


### MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorList <a name="MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorList" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorList.Initializer"></a>

```typescript
import { medialiveMultiplexProgram } from '@cdktf/provider-aws'

new medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorList.get"></a>

```typescript
public get(index: number): MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptor">MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptor</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptor[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptor">MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptor</a>[]

---


### MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference <a name="MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.Initializer"></a>

```typescript
import { medialiveMultiplexProgram } from '@cdktf/provider-aws'

new medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.property.providerNameInput">providerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.property.serviceNameInput">serviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.property.providerName">providerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.property.serviceName">serviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptor">MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptor</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `providerNameInput`<sup>Optional</sup> <a name="providerNameInput" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.property.providerNameInput"></a>

```typescript
public readonly providerNameInput: string;
```

- *Type:* string

---

##### `serviceNameInput`<sup>Optional</sup> <a name="serviceNameInput" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.property.serviceNameInput"></a>

```typescript
public readonly serviceNameInput: string;
```

- *Type:* string

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.property.providerName"></a>

```typescript
public readonly providerName: string;
```

- *Type:* string

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptor | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptor">MedialiveMultiplexProgramMultiplexProgramSettingsServiceDescriptor</a> | cdktf.IResolvable

---


### MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsList <a name="MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsList" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsList.Initializer"></a>

```typescript
import { medialiveMultiplexProgram } from '@cdktf/provider-aws'

new medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsList.get"></a>

```typescript
public get(index: number): MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettings">MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettings</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettings[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettings">MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettings</a>[]

---


### MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference <a name="MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.Initializer"></a>

```typescript
import { medialiveMultiplexProgram } from '@cdktf/provider-aws'

new medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.putStatemuxSettings">putStatemuxSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.putStatmuxSettings">putStatmuxSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.resetConstantBitrate">resetConstantBitrate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.resetStatemuxSettings">resetStatemuxSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.resetStatmuxSettings">resetStatmuxSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putStatemuxSettings` <a name="putStatemuxSettings" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.putStatemuxSettings"></a>

```typescript
public putStatemuxSettings(value: IResolvable | MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettings[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.putStatemuxSettings.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettings">MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettings</a>[]

---

##### `putStatmuxSettings` <a name="putStatmuxSettings" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.putStatmuxSettings"></a>

```typescript
public putStatmuxSettings(value: IResolvable | MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.putStatmuxSettings.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings">MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings</a>[]

---

##### `resetConstantBitrate` <a name="resetConstantBitrate" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.resetConstantBitrate"></a>

```typescript
public resetConstantBitrate(): void
```

##### `resetStatemuxSettings` <a name="resetStatemuxSettings" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.resetStatemuxSettings"></a>

```typescript
public resetStatemuxSettings(): void
```

##### `resetStatmuxSettings` <a name="resetStatmuxSettings" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.resetStatmuxSettings"></a>

```typescript
public resetStatmuxSettings(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.property.statemuxSettings">statemuxSettings</a></code> | <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsList">MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.property.statmuxSettings">statmuxSettings</a></code> | <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsList">MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.property.constantBitrateInput">constantBitrateInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.property.statemuxSettingsInput">statemuxSettingsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettings">MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettings</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.property.statmuxSettingsInput">statmuxSettingsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings">MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.property.constantBitrate">constantBitrate</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettings">MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettings</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `statemuxSettings`<sup>Required</sup> <a name="statemuxSettings" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.property.statemuxSettings"></a>

```typescript
public readonly statemuxSettings: MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsList;
```

- *Type:* <a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsList">MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsList</a>

---

##### `statmuxSettings`<sup>Required</sup> <a name="statmuxSettings" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.property.statmuxSettings"></a>

```typescript
public readonly statmuxSettings: MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsList;
```

- *Type:* <a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsList">MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsList</a>

---

##### `constantBitrateInput`<sup>Optional</sup> <a name="constantBitrateInput" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.property.constantBitrateInput"></a>

```typescript
public readonly constantBitrateInput: number;
```

- *Type:* number

---

##### `statemuxSettingsInput`<sup>Optional</sup> <a name="statemuxSettingsInput" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.property.statemuxSettingsInput"></a>

```typescript
public readonly statemuxSettingsInput: IResolvable | MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettings[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettings">MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettings</a>[]

---

##### `statmuxSettingsInput`<sup>Optional</sup> <a name="statmuxSettingsInput" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.property.statmuxSettingsInput"></a>

```typescript
public readonly statmuxSettingsInput: IResolvable | MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings">MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings</a>[]

---

##### `constantBitrate`<sup>Required</sup> <a name="constantBitrate" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.property.constantBitrate"></a>

```typescript
public readonly constantBitrate: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettings | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettings">MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettings</a> | cdktf.IResolvable

---


### MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsList <a name="MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsList" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsList.Initializer"></a>

```typescript
import { medialiveMultiplexProgram } from '@cdktf/provider-aws'

new medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsList.get"></a>

```typescript
public get(index: number): MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettings">MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettings</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettings[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettings">MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettings</a>[]

---


### MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference <a name="MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.Initializer"></a>

```typescript
import { medialiveMultiplexProgram } from '@cdktf/provider-aws'

new medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.resetMaximumBitrate">resetMaximumBitrate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.resetMinimumBitrate">resetMinimumBitrate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.resetPriority">resetPriority</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaximumBitrate` <a name="resetMaximumBitrate" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.resetMaximumBitrate"></a>

```typescript
public resetMaximumBitrate(): void
```

##### `resetMinimumBitrate` <a name="resetMinimumBitrate" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.resetMinimumBitrate"></a>

```typescript
public resetMinimumBitrate(): void
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.resetPriority"></a>

```typescript
public resetPriority(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.property.maximumBitrateInput">maximumBitrateInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.property.minimumBitrateInput">minimumBitrateInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.property.maximumBitrate">maximumBitrate</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.property.minimumBitrate">minimumBitrate</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettings">MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettings</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maximumBitrateInput`<sup>Optional</sup> <a name="maximumBitrateInput" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.property.maximumBitrateInput"></a>

```typescript
public readonly maximumBitrateInput: number;
```

- *Type:* number

---

##### `minimumBitrateInput`<sup>Optional</sup> <a name="minimumBitrateInput" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.property.minimumBitrateInput"></a>

```typescript
public readonly minimumBitrateInput: number;
```

- *Type:* number

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `maximumBitrate`<sup>Required</sup> <a name="maximumBitrate" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.property.maximumBitrate"></a>

```typescript
public readonly maximumBitrate: number;
```

- *Type:* number

---

##### `minimumBitrate`<sup>Required</sup> <a name="minimumBitrate" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.property.minimumBitrate"></a>

```typescript
public readonly minimumBitrate: number;
```

- *Type:* number

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettings | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettings">MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatemuxSettings</a> | cdktf.IResolvable

---


### MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsList <a name="MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsList" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsList.Initializer"></a>

```typescript
import { medialiveMultiplexProgram } from '@cdktf/provider-aws'

new medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsList.get"></a>

```typescript
public get(index: number): MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings">MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings">MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings</a>[]

---


### MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference <a name="MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.Initializer"></a>

```typescript
import { medialiveMultiplexProgram } from '@cdktf/provider-aws'

new medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.resetMaximumBitrate">resetMaximumBitrate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.resetMinimumBitrate">resetMinimumBitrate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.resetPriority">resetPriority</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaximumBitrate` <a name="resetMaximumBitrate" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.resetMaximumBitrate"></a>

```typescript
public resetMaximumBitrate(): void
```

##### `resetMinimumBitrate` <a name="resetMinimumBitrate" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.resetMinimumBitrate"></a>

```typescript
public resetMinimumBitrate(): void
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.resetPriority"></a>

```typescript
public resetPriority(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.maximumBitrateInput">maximumBitrateInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.minimumBitrateInput">minimumBitrateInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.maximumBitrate">maximumBitrate</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.minimumBitrate">minimumBitrate</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings">MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maximumBitrateInput`<sup>Optional</sup> <a name="maximumBitrateInput" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.maximumBitrateInput"></a>

```typescript
public readonly maximumBitrateInput: number;
```

- *Type:* number

---

##### `minimumBitrateInput`<sup>Optional</sup> <a name="minimumBitrateInput" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.minimumBitrateInput"></a>

```typescript
public readonly minimumBitrateInput: number;
```

- *Type:* number

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `maximumBitrate`<sup>Required</sup> <a name="maximumBitrate" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.maximumBitrate"></a>

```typescript
public readonly maximumBitrate: number;
```

- *Type:* number

---

##### `minimumBitrate`<sup>Required</sup> <a name="minimumBitrate" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.minimumBitrate"></a>

```typescript
public readonly minimumBitrate: number;
```

- *Type:* number

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.medialiveMultiplexProgram.MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings">MedialiveMultiplexProgramMultiplexProgramSettingsVideoSettingsStatmuxSettings</a> | cdktf.IResolvable

---



