# `codecommitTrigger` Submodule <a name="`codecommitTrigger` Submodule" id="@cdktf/provider-aws.codecommitTrigger"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodecommitTrigger <a name="CodecommitTrigger" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/codecommit_trigger aws_codecommit_trigger}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.Initializer"></a>

```typescript
import { codecommitTrigger } from '@cdktf/provider-aws'

new codecommitTrigger.CodecommitTrigger(scope: Construct, id: string, config: CodecommitTriggerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerConfig">CodecommitTriggerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerConfig">CodecommitTriggerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.putTrigger">putTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTrigger` <a name="putTrigger" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.putTrigger"></a>

```typescript
public putTrigger(value: IResolvable | CodecommitTriggerTrigger[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.putTrigger.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTrigger">CodecommitTriggerTrigger</a>[]

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.isConstruct"></a>

```typescript
import { codecommitTrigger } from '@cdktf/provider-aws'

codecommitTrigger.CodecommitTrigger.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.isTerraformElement"></a>

```typescript
import { codecommitTrigger } from '@cdktf/provider-aws'

codecommitTrigger.CodecommitTrigger.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.isTerraformResource"></a>

```typescript
import { codecommitTrigger } from '@cdktf/provider-aws'

codecommitTrigger.CodecommitTrigger.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.property.configurationId">configurationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.property.trigger">trigger</a></code> | <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerList">CodecommitTriggerTriggerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.property.repositoryNameInput">repositoryNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.property.triggerInput">triggerInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTrigger">CodecommitTriggerTrigger</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.property.repositoryName">repositoryName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `configurationId`<sup>Required</sup> <a name="configurationId" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.property.configurationId"></a>

```typescript
public readonly configurationId: string;
```

- *Type:* string

---

##### `trigger`<sup>Required</sup> <a name="trigger" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.property.trigger"></a>

```typescript
public readonly trigger: CodecommitTriggerTriggerList;
```

- *Type:* <a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerList">CodecommitTriggerTriggerList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `repositoryNameInput`<sup>Optional</sup> <a name="repositoryNameInput" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.property.repositoryNameInput"></a>

```typescript
public readonly repositoryNameInput: string;
```

- *Type:* string

---

##### `triggerInput`<sup>Optional</sup> <a name="triggerInput" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.property.triggerInput"></a>

```typescript
public readonly triggerInput: IResolvable | CodecommitTriggerTrigger[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTrigger">CodecommitTriggerTrigger</a>[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `repositoryName`<sup>Required</sup> <a name="repositoryName" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.property.repositoryName"></a>

```typescript
public readonly repositoryName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTrigger.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CodecommitTriggerConfig <a name="CodecommitTriggerConfig" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerConfig.Initializer"></a>

```typescript
import { codecommitTrigger } from '@cdktf/provider-aws'

const codecommitTriggerConfig: codecommitTrigger.CodecommitTriggerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerConfig.property.repositoryName">repositoryName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codecommit_trigger#repository_name CodecommitTrigger#repository_name}. |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerConfig.property.trigger">trigger</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTrigger">CodecommitTriggerTrigger</a>[]</code> | trigger block. |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codecommit_trigger#id CodecommitTrigger#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `repositoryName`<sup>Required</sup> <a name="repositoryName" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerConfig.property.repositoryName"></a>

```typescript
public readonly repositoryName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codecommit_trigger#repository_name CodecommitTrigger#repository_name}.

---

##### `trigger`<sup>Required</sup> <a name="trigger" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerConfig.property.trigger"></a>

```typescript
public readonly trigger: IResolvable | CodecommitTriggerTrigger[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTrigger">CodecommitTriggerTrigger</a>[]

trigger block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codecommit_trigger#trigger CodecommitTrigger#trigger}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codecommit_trigger#id CodecommitTrigger#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### CodecommitTriggerTrigger <a name="CodecommitTriggerTrigger" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTrigger"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTrigger.Initializer"></a>

```typescript
import { codecommitTrigger } from '@cdktf/provider-aws'

const codecommitTriggerTrigger: codecommitTrigger.CodecommitTriggerTrigger = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTrigger.property.destinationArn">destinationArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codecommit_trigger#destination_arn CodecommitTrigger#destination_arn}. |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTrigger.property.events">events</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codecommit_trigger#events CodecommitTrigger#events}. |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTrigger.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codecommit_trigger#name CodecommitTrigger#name}. |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTrigger.property.branches">branches</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codecommit_trigger#branches CodecommitTrigger#branches}. |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTrigger.property.customData">customData</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codecommit_trigger#custom_data CodecommitTrigger#custom_data}. |

---

##### `destinationArn`<sup>Required</sup> <a name="destinationArn" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTrigger.property.destinationArn"></a>

```typescript
public readonly destinationArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codecommit_trigger#destination_arn CodecommitTrigger#destination_arn}.

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTrigger.property.events"></a>

```typescript
public readonly events: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codecommit_trigger#events CodecommitTrigger#events}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTrigger.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codecommit_trigger#name CodecommitTrigger#name}.

---

##### `branches`<sup>Optional</sup> <a name="branches" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTrigger.property.branches"></a>

```typescript
public readonly branches: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codecommit_trigger#branches CodecommitTrigger#branches}.

---

##### `customData`<sup>Optional</sup> <a name="customData" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTrigger.property.customData"></a>

```typescript
public readonly customData: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codecommit_trigger#custom_data CodecommitTrigger#custom_data}.

---

## Classes <a name="Classes" id="Classes"></a>

### CodecommitTriggerTriggerList <a name="CodecommitTriggerTriggerList" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerList.Initializer"></a>

```typescript
import { codecommitTrigger } from '@cdktf/provider-aws'

new codecommitTrigger.CodecommitTriggerTriggerList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerList.get"></a>

```typescript
public get(index: number): CodecommitTriggerTriggerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTrigger">CodecommitTriggerTrigger</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodecommitTriggerTrigger[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTrigger">CodecommitTriggerTrigger</a>[]

---


### CodecommitTriggerTriggerOutputReference <a name="CodecommitTriggerTriggerOutputReference" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.Initializer"></a>

```typescript
import { codecommitTrigger } from '@cdktf/provider-aws'

new codecommitTrigger.CodecommitTriggerTriggerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.resetBranches">resetBranches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.resetCustomData">resetCustomData</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBranches` <a name="resetBranches" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.resetBranches"></a>

```typescript
public resetBranches(): void
```

##### `resetCustomData` <a name="resetCustomData" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.resetCustomData"></a>

```typescript
public resetCustomData(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.property.branchesInput">branchesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.property.customDataInput">customDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.property.destinationArnInput">destinationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.property.eventsInput">eventsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.property.branches">branches</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.property.customData">customData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.property.destinationArn">destinationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.property.events">events</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTrigger">CodecommitTriggerTrigger</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `branchesInput`<sup>Optional</sup> <a name="branchesInput" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.property.branchesInput"></a>

```typescript
public readonly branchesInput: string[];
```

- *Type:* string[]

---

##### `customDataInput`<sup>Optional</sup> <a name="customDataInput" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.property.customDataInput"></a>

```typescript
public readonly customDataInput: string;
```

- *Type:* string

---

##### `destinationArnInput`<sup>Optional</sup> <a name="destinationArnInput" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.property.destinationArnInput"></a>

```typescript
public readonly destinationArnInput: string;
```

- *Type:* string

---

##### `eventsInput`<sup>Optional</sup> <a name="eventsInput" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.property.eventsInput"></a>

```typescript
public readonly eventsInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `branches`<sup>Required</sup> <a name="branches" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.property.branches"></a>

```typescript
public readonly branches: string[];
```

- *Type:* string[]

---

##### `customData`<sup>Required</sup> <a name="customData" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.property.customData"></a>

```typescript
public readonly customData: string;
```

- *Type:* string

---

##### `destinationArn`<sup>Required</sup> <a name="destinationArn" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.property.destinationArn"></a>

```typescript
public readonly destinationArn: string;
```

- *Type:* string

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.property.events"></a>

```typescript
public readonly events: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTriggerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CodecommitTriggerTrigger | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.codecommitTrigger.CodecommitTriggerTrigger">CodecommitTriggerTrigger</a> | cdktf.IResolvable

---



