# `ssmDefaultPatchBaseline` Submodule <a name="`ssmDefaultPatchBaseline` Submodule" id="@cdktf/provider-aws.ssmDefaultPatchBaseline"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsmDefaultPatchBaseline <a name="SsmDefaultPatchBaseline" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ssm_default_patch_baseline aws_ssm_default_patch_baseline}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.Initializer"></a>

```typescript
import { ssmDefaultPatchBaseline } from '@cdktf/provider-aws'

new ssmDefaultPatchBaseline.SsmDefaultPatchBaseline(scope: Construct, id: string, config: SsmDefaultPatchBaselineConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaselineConfig">SsmDefaultPatchBaselineConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaselineConfig">SsmDefaultPatchBaselineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.isConstruct"></a>

```typescript
import { ssmDefaultPatchBaseline } from '@cdktf/provider-aws'

ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.isTerraformElement"></a>

```typescript
import { ssmDefaultPatchBaseline } from '@cdktf/provider-aws'

ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.isTerraformResource"></a>

```typescript
import { ssmDefaultPatchBaseline } from '@cdktf/provider-aws'

ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.baselineIdInput">baselineIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.operatingSystemInput">operatingSystemInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.baselineId">baselineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.operatingSystem">operatingSystem</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `baselineIdInput`<sup>Optional</sup> <a name="baselineIdInput" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.baselineIdInput"></a>

```typescript
public readonly baselineIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `operatingSystemInput`<sup>Optional</sup> <a name="operatingSystemInput" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.operatingSystemInput"></a>

```typescript
public readonly operatingSystemInput: string;
```

- *Type:* string

---

##### `baselineId`<sup>Required</sup> <a name="baselineId" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.baselineId"></a>

```typescript
public readonly baselineId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `operatingSystem`<sup>Required</sup> <a name="operatingSystem" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.operatingSystem"></a>

```typescript
public readonly operatingSystem: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SsmDefaultPatchBaselineConfig <a name="SsmDefaultPatchBaselineConfig" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaselineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaselineConfig.Initializer"></a>

```typescript
import { ssmDefaultPatchBaseline } from '@cdktf/provider-aws'

const ssmDefaultPatchBaselineConfig: ssmDefaultPatchBaseline.SsmDefaultPatchBaselineConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaselineConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaselineConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaselineConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaselineConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaselineConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaselineConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaselineConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaselineConfig.property.baselineId">baselineId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_default_patch_baseline#baseline_id SsmDefaultPatchBaseline#baseline_id}. |
| <code><a href="#@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaselineConfig.property.operatingSystem">operatingSystem</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_default_patch_baseline#operating_system SsmDefaultPatchBaseline#operating_system}. |
| <code><a href="#@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaselineConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_default_patch_baseline#id SsmDefaultPatchBaseline#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaselineConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaselineConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaselineConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaselineConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaselineConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaselineConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaselineConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `baselineId`<sup>Required</sup> <a name="baselineId" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaselineConfig.property.baselineId"></a>

```typescript
public readonly baselineId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_default_patch_baseline#baseline_id SsmDefaultPatchBaseline#baseline_id}.

---

##### `operatingSystem`<sup>Required</sup> <a name="operatingSystem" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaselineConfig.property.operatingSystem"></a>

```typescript
public readonly operatingSystem: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_default_patch_baseline#operating_system SsmDefaultPatchBaseline#operating_system}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaselineConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_default_patch_baseline#id SsmDefaultPatchBaseline#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



