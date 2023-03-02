# `ssoadminInstanceAccessControlAttributes` Submodule <a name="`ssoadminInstanceAccessControlAttributes` Submodule" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsoadminInstanceAccessControlAttributes <a name="SsoadminInstanceAccessControlAttributes" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_instance_access_control_attributes aws_ssoadmin_instance_access_control_attributes}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.Initializer"></a>

```typescript
import { ssoadminInstanceAccessControlAttributes } from '@cdktf/provider-aws'

new ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes(scope: Construct, id: string, config: SsoadminInstanceAccessControlAttributesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesConfig">SsoadminInstanceAccessControlAttributesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesConfig">SsoadminInstanceAccessControlAttributesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.putAttribute">putAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putAttribute` <a name="putAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.putAttribute"></a>

```typescript
public putAttribute(value: IResolvable | SsoadminInstanceAccessControlAttributesAttribute[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.putAttribute.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttribute">SsoadminInstanceAccessControlAttributesAttribute</a>[]

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.isConstruct"></a>

```typescript
import { ssoadminInstanceAccessControlAttributes } from '@cdktf/provider-aws'

ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.isTerraformElement"></a>

```typescript
import { ssoadminInstanceAccessControlAttributes } from '@cdktf/provider-aws'

ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.isTerraformResource"></a>

```typescript
import { ssoadminInstanceAccessControlAttributes } from '@cdktf/provider-aws'

ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.attribute">attribute</a></code> | <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeList">SsoadminInstanceAccessControlAttributesAttributeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.statusReason">statusReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.attributeInput">attributeInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttribute">SsoadminInstanceAccessControlAttributesAttribute</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.instanceArnInput">instanceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.instanceArn">instanceArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.attribute"></a>

```typescript
public readonly attribute: SsoadminInstanceAccessControlAttributesAttributeList;
```

- *Type:* <a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeList">SsoadminInstanceAccessControlAttributesAttributeList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `statusReason`<sup>Required</sup> <a name="statusReason" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.statusReason"></a>

```typescript
public readonly statusReason: string;
```

- *Type:* string

---

##### `attributeInput`<sup>Optional</sup> <a name="attributeInput" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.attributeInput"></a>

```typescript
public readonly attributeInput: IResolvable | SsoadminInstanceAccessControlAttributesAttribute[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttribute">SsoadminInstanceAccessControlAttributesAttribute</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceArnInput`<sup>Optional</sup> <a name="instanceArnInput" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.instanceArnInput"></a>

```typescript
public readonly instanceArnInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.instanceArn"></a>

```typescript
public readonly instanceArn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributes.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SsoadminInstanceAccessControlAttributesAttribute <a name="SsoadminInstanceAccessControlAttributesAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttribute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttribute.Initializer"></a>

```typescript
import { ssoadminInstanceAccessControlAttributes } from '@cdktf/provider-aws'

const ssoadminInstanceAccessControlAttributesAttribute: ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttribute = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttribute.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_instance_access_control_attributes#key SsoadminInstanceAccessControlAttributes#key}. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttribute.property.value">value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValue">SsoadminInstanceAccessControlAttributesAttributeValue</a>[]</code> | value block. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttribute.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_instance_access_control_attributes#key SsoadminInstanceAccessControlAttributes#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttribute.property.value"></a>

```typescript
public readonly value: IResolvable | SsoadminInstanceAccessControlAttributesAttributeValue[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValue">SsoadminInstanceAccessControlAttributesAttributeValue</a>[]

value block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_instance_access_control_attributes#value SsoadminInstanceAccessControlAttributes#value}

---

### SsoadminInstanceAccessControlAttributesAttributeValue <a name="SsoadminInstanceAccessControlAttributesAttributeValue" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValue.Initializer"></a>

```typescript
import { ssoadminInstanceAccessControlAttributes } from '@cdktf/provider-aws'

const ssoadminInstanceAccessControlAttributesAttributeValue: ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValue = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValue.property.source">source</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_instance_access_control_attributes#source SsoadminInstanceAccessControlAttributes#source}. |

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValue.property.source"></a>

```typescript
public readonly source: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_instance_access_control_attributes#source SsoadminInstanceAccessControlAttributes#source}.

---

### SsoadminInstanceAccessControlAttributesConfig <a name="SsoadminInstanceAccessControlAttributesConfig" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesConfig.Initializer"></a>

```typescript
import { ssoadminInstanceAccessControlAttributes } from '@cdktf/provider-aws'

const ssoadminInstanceAccessControlAttributesConfig: ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesConfig.property.attribute">attribute</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttribute">SsoadminInstanceAccessControlAttributesAttribute</a>[]</code> | attribute block. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesConfig.property.instanceArn">instanceArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_instance_access_control_attributes#instance_arn SsoadminInstanceAccessControlAttributes#instance_arn}. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_instance_access_control_attributes#id SsoadminInstanceAccessControlAttributes#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesConfig.property.attribute"></a>

```typescript
public readonly attribute: IResolvable | SsoadminInstanceAccessControlAttributesAttribute[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttribute">SsoadminInstanceAccessControlAttributesAttribute</a>[]

attribute block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_instance_access_control_attributes#attribute SsoadminInstanceAccessControlAttributes#attribute}

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesConfig.property.instanceArn"></a>

```typescript
public readonly instanceArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_instance_access_control_attributes#instance_arn SsoadminInstanceAccessControlAttributes#instance_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_instance_access_control_attributes#id SsoadminInstanceAccessControlAttributes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### SsoadminInstanceAccessControlAttributesAttributeList <a name="SsoadminInstanceAccessControlAttributesAttributeList" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeList.Initializer"></a>

```typescript
import { ssoadminInstanceAccessControlAttributes } from '@cdktf/provider-aws'

new ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeList.get"></a>

```typescript
public get(index: number): SsoadminInstanceAccessControlAttributesAttributeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttribute">SsoadminInstanceAccessControlAttributesAttribute</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsoadminInstanceAccessControlAttributesAttribute[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttribute">SsoadminInstanceAccessControlAttributesAttribute</a>[]

---


### SsoadminInstanceAccessControlAttributesAttributeOutputReference <a name="SsoadminInstanceAccessControlAttributesAttributeOutputReference" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.Initializer"></a>

```typescript
import { ssoadminInstanceAccessControlAttributes } from '@cdktf/provider-aws'

new ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.putValue">putValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putValue` <a name="putValue" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.putValue"></a>

```typescript
public putValue(value: IResolvable | SsoadminInstanceAccessControlAttributesAttributeValue[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.putValue.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValue">SsoadminInstanceAccessControlAttributesAttributeValue</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.property.value">value</a></code> | <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueList">SsoadminInstanceAccessControlAttributesAttributeValueList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.property.valueInput">valueInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValue">SsoadminInstanceAccessControlAttributesAttributeValue</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttribute">SsoadminInstanceAccessControlAttributesAttribute</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.property.value"></a>

```typescript
public readonly value: SsoadminInstanceAccessControlAttributesAttributeValueList;
```

- *Type:* <a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueList">SsoadminInstanceAccessControlAttributesAttributeValueList</a>

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: IResolvable | SsoadminInstanceAccessControlAttributesAttributeValue[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValue">SsoadminInstanceAccessControlAttributesAttributeValue</a>[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SsoadminInstanceAccessControlAttributesAttribute | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttribute">SsoadminInstanceAccessControlAttributesAttribute</a> | cdktf.IResolvable

---


### SsoadminInstanceAccessControlAttributesAttributeValueList <a name="SsoadminInstanceAccessControlAttributesAttributeValueList" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueList.Initializer"></a>

```typescript
import { ssoadminInstanceAccessControlAttributes } from '@cdktf/provider-aws'

new ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueList.get"></a>

```typescript
public get(index: number): SsoadminInstanceAccessControlAttributesAttributeValueOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValue">SsoadminInstanceAccessControlAttributesAttributeValue</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsoadminInstanceAccessControlAttributesAttributeValue[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValue">SsoadminInstanceAccessControlAttributesAttributeValue</a>[]

---


### SsoadminInstanceAccessControlAttributesAttributeValueOutputReference <a name="SsoadminInstanceAccessControlAttributesAttributeValueOutputReference" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.Initializer"></a>

```typescript
import { ssoadminInstanceAccessControlAttributes } from '@cdktf/provider-aws'

new ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.property.sourceInput">sourceInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.property.source">source</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValue">SsoadminInstanceAccessControlAttributesAttributeValue</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.property.sourceInput"></a>

```typescript
public readonly sourceInput: string[];
```

- *Type:* string[]

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.property.source"></a>

```typescript
public readonly source: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValueOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SsoadminInstanceAccessControlAttributesAttributeValue | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.ssoadminInstanceAccessControlAttributes.SsoadminInstanceAccessControlAttributesAttributeValue">SsoadminInstanceAccessControlAttributesAttributeValue</a> | cdktf.IResolvable

---



