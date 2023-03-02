# `chimeVoiceConnectorTerminationCredentials` Submodule <a name="`chimeVoiceConnectorTerminationCredentials` Submodule" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChimeVoiceConnectorTerminationCredentials <a name="ChimeVoiceConnectorTerminationCredentials" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination_credentials aws_chime_voice_connector_termination_credentials}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.Initializer"></a>

```typescript
import { chimeVoiceConnectorTerminationCredentials } from '@cdktf/provider-aws'

new chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials(scope: Construct, id: string, config: ChimeVoiceConnectorTerminationCredentialsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsConfig">ChimeVoiceConnectorTerminationCredentialsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsConfig">ChimeVoiceConnectorTerminationCredentialsConfig</a>

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

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putCredentials` <a name="putCredentials" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.putCredentials"></a>

```typescript
public putCredentials(value: IResolvable | ChimeVoiceConnectorTerminationCredentialsCredentials[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.putCredentials.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentials">ChimeVoiceConnectorTerminationCredentialsCredentials</a>[]

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.isConstruct"></a>

```typescript
import { chimeVoiceConnectorTerminationCredentials } from '@cdktf/provider-aws'

chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.isTerraformElement"></a>

```typescript
import { chimeVoiceConnectorTerminationCredentials } from '@cdktf/provider-aws'

chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.isTerraformResource"></a>

```typescript
import { chimeVoiceConnectorTerminationCredentials } from '@cdktf/provider-aws'

chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.credentials">credentials</a></code> | <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsList">ChimeVoiceConnectorTerminationCredentialsCredentialsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.credentialsInput">credentialsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentials">ChimeVoiceConnectorTerminationCredentialsCredentials</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.voiceConnectorIdInput">voiceConnectorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.voiceConnectorId">voiceConnectorId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.credentials"></a>

```typescript
public readonly credentials: ChimeVoiceConnectorTerminationCredentialsCredentialsList;
```

- *Type:* <a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsList">ChimeVoiceConnectorTerminationCredentialsCredentialsList</a>

---

##### `credentialsInput`<sup>Optional</sup> <a name="credentialsInput" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.credentialsInput"></a>

```typescript
public readonly credentialsInput: IResolvable | ChimeVoiceConnectorTerminationCredentialsCredentials[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentials">ChimeVoiceConnectorTerminationCredentialsCredentials</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `voiceConnectorIdInput`<sup>Optional</sup> <a name="voiceConnectorIdInput" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.voiceConnectorIdInput"></a>

```typescript
public readonly voiceConnectorIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `voiceConnectorId`<sup>Required</sup> <a name="voiceConnectorId" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.voiceConnectorId"></a>

```typescript
public readonly voiceConnectorId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentials.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ChimeVoiceConnectorTerminationCredentialsConfig <a name="ChimeVoiceConnectorTerminationCredentialsConfig" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsConfig.Initializer"></a>

```typescript
import { chimeVoiceConnectorTerminationCredentials } from '@cdktf/provider-aws'

const chimeVoiceConnectorTerminationCredentialsConfig: chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsConfig.property.credentials">credentials</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentials">ChimeVoiceConnectorTerminationCredentialsCredentials</a>[]</code> | credentials block. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsConfig.property.voiceConnectorId">voiceConnectorId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination_credentials#voice_connector_id ChimeVoiceConnectorTerminationCredentials#voice_connector_id}. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination_credentials#id ChimeVoiceConnectorTerminationCredentials#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsConfig.property.credentials"></a>

```typescript
public readonly credentials: IResolvable | ChimeVoiceConnectorTerminationCredentialsCredentials[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentials">ChimeVoiceConnectorTerminationCredentialsCredentials</a>[]

credentials block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination_credentials#credentials ChimeVoiceConnectorTerminationCredentials#credentials}

---

##### `voiceConnectorId`<sup>Required</sup> <a name="voiceConnectorId" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsConfig.property.voiceConnectorId"></a>

```typescript
public readonly voiceConnectorId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination_credentials#voice_connector_id ChimeVoiceConnectorTerminationCredentials#voice_connector_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination_credentials#id ChimeVoiceConnectorTerminationCredentials#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### ChimeVoiceConnectorTerminationCredentialsCredentials <a name="ChimeVoiceConnectorTerminationCredentialsCredentials" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentials.Initializer"></a>

```typescript
import { chimeVoiceConnectorTerminationCredentials } from '@cdktf/provider-aws'

const chimeVoiceConnectorTerminationCredentialsCredentials: chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentials = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentials.property.password">password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination_credentials#password ChimeVoiceConnectorTerminationCredentials#password}. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentials.property.username">username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination_credentials#username ChimeVoiceConnectorTerminationCredentials#username}. |

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentials.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination_credentials#password ChimeVoiceConnectorTerminationCredentials#password}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentials.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_termination_credentials#username ChimeVoiceConnectorTerminationCredentials#username}.

---

## Classes <a name="Classes" id="Classes"></a>

### ChimeVoiceConnectorTerminationCredentialsCredentialsList <a name="ChimeVoiceConnectorTerminationCredentialsCredentialsList" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsList.Initializer"></a>

```typescript
import { chimeVoiceConnectorTerminationCredentials } from '@cdktf/provider-aws'

new chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsList.get"></a>

```typescript
public get(index: number): ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentials">ChimeVoiceConnectorTerminationCredentialsCredentials</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ChimeVoiceConnectorTerminationCredentialsCredentials[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentials">ChimeVoiceConnectorTerminationCredentialsCredentials</a>[]

---


### ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference <a name="ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.Initializer"></a>

```typescript
import { chimeVoiceConnectorTerminationCredentials } from '@cdktf/provider-aws'

new chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentials">ChimeVoiceConnectorTerminationCredentialsCredentials</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentialsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ChimeVoiceConnectorTerminationCredentialsCredentials | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.chimeVoiceConnectorTerminationCredentials.ChimeVoiceConnectorTerminationCredentialsCredentials">ChimeVoiceConnectorTerminationCredentialsCredentials</a> | cdktf.IResolvable

---



